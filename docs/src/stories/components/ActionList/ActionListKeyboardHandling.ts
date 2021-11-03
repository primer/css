// keycodes

const ArrowRight = 39
const ArrowLeft = 37
const ArrowDown = 40
const ArrowUp = 38
const Space = 32
const Enter = 13
const Escape = 27

/**
 * role="menu" specific keyboard + focus handling

 * things we need:
 * roving tabindex
 * toggle collapse/expand
 * toggle checked
 * toggle selected
 */

/**
 * find first ul ActionList with tab-index="0"
 * Focus first ul
 * ArrowDown key: change tab-index on ul to "-1", change tab-index on focused item to "0", focus item (li)
 * ArrowUp key: change tab-index on focused item to "0", focus item (li)
 * Escape key: move focus back to parent ul + tab-index="0"
 * Enter key: opens submenu if aria-expanded exists + move focus to first item, triggers event on li (action) or navigates if link is present
 * Space key: menuitemcheckbox or menuitemradio: set checked state
 */

class ActionListElement extends HTMLElement {
  get preload(): boolean {
    return this.hasAttribute('preload')
  }

  set preload(value: boolean) {
    if (value) {
      this.setAttribute('preload', '')
    } else {
      this.removeAttribute('preload')
    }
  }

  get src(): string {
    return this.getAttribute('src') || ''
  }

  set src(value: string) {
    this.setAttribute('src', value)
  }

  connectedCallback(): void {
    // if (!this.hasAttribute('role')) this.setAttribute('role', 'menu')

    const list = this.parentElement
    if (!list) return

    const listItem = list.querySelector('li')
    const listMenuItem = listItem.hasAttribute('role="menuitem"')
    const listLink = list.querySelector('a')
    const listMenuItemLink = listLink.hasAttribute('role="menuitem"')
    console.log(listMenuItem)

    // if (summary) {
    //   summary.setAttribute('aria-haspopup', 'menu')
    //   if (!summary.hasAttribute('role')) summary.setAttribute('role', 'button')
    // }

    const subscriptions = [
      fromEvent(list, 'compositionstart', e => trackComposition(this, e)),
      fromEvent(list, 'compositionend', e => trackComposition(this, e)),
      fromEvent(list, 'click', e => shouldCommit(list, e)),
      fromEvent(list, 'change', e => shouldCommit(list, e)),
      fromEvent(list, 'keydown', e => keydown(list, this, e)),
      fromEvent(list, 'toggle', () => loadFragment(list, this), {once: true}),
      fromEvent(list, 'toggle', () => closeCurrentMenu(list)),
      this.preload
        ? fromEvent(list, 'mouseover', () => loadFragment(list, this), {once: true})
        : NullSubscription,
      ...focusOnOpen(list)
    ]

    states.set(this, {subscriptions, loaded: false, isComposing: false})
  }

  disconnectedCallback(): void {
    const state = states.get(this)
    if (!state) return
    states.delete(this)
    for (const sub of state.subscriptions) {
      sub.unsubscribe()
    }
  }
}

const states = new WeakMap()

type Subscription = {unsubscribe(): void}
const NullSubscription = {
  unsubscribe() {
    /* Do nothing */
  }
}

function fromEvent(
  target: EventTarget,
  eventName: string,
  onNext: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions = false
): Subscription {
  target.addEventListener(eventName, onNext, options)
  return {
    unsubscribe: () => {
      target.removeEventListener(eventName, onNext, options)
    }
  }
}

function loadFragment(list: Element, menu: ActionListElement) {
  const src = menu.getAttribute('src')
  if (!src) return

  const state = states.get(menu)
  if (!state) return

  if (state.loaded) return
  state.loaded = true

  const loader = menu.querySelector('include-fragment')
  if (loader && !loader.hasAttribute('src')) {
    loader.addEventListener('loadend', () => autofocus(list))
    loader.setAttribute('src', src)
  }
}

function focusOnOpen(list: Element): Subscription[] {
  let isMouse = false
  const onmousedown = () => (isMouse = true)
  const onkeydown = () => (isMouse = false)
  const ontoggle = () => {
    if (!list.hasAttribute('open')) return
    if (autofocus(list)) return
    if (!isMouse) focusFirstItem(list)
  }

  return [
    fromEvent(list, 'mousedown', onmousedown),
    fromEvent(list, 'keydown', onkeydown),
    fromEvent(list, 'toggle', ontoggle)
  ]
}

function closeCurrentMenu(list: Element) {
  if (!list.hasAttribute('open')) return

  for (const menu of document.querySelectorAll('details[open] > details-menu')) {
    const opened = menu.closest('details')
    if (opened && opened !== details && !opened.contains(details)) {
      opened.removeAttribute('open')
    }
  }
}

function autofocus(list: Element): boolean {
  if (!list.hasAttribute('open')) return false
  const input = list.querySelector<HTMLElement>('details-menu [autofocus]')
  if (input) {
    input.focus()
    return true
  } else {
    return false
  }
}

// Focus first item unless an item is already focused.
function focusFirstItem(list: Element) {
  const selected = document.activeElement
  if (selected && isMenuItem(selected) && list.contains(selected)) return

  const target = sibling(list, true)
  if (target) target.focus()
}

function sibling(list: Element, next: boolean): HTMLElement | null {
  const options = Array.from(
    list.querySelectorAll<HTMLElement>(
      '[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])'
    )
  )
  const selected = document.activeElement
  const index = selected instanceof HTMLElement ? options.indexOf(selected) : -1
  const found = next ? options[index + 1] : options[index - 1]
  const def = next ? options[0] : options[options.length - 1]
  return found || def
}

const ctrlBindings = navigator.userAgent.match(/Macintosh/)

function shouldCommit(list: Element, event: Event) {
  const target = event.target
  if (!(target instanceof Element)) return

  // Ignore clicks from nested details.
  if (target.closest('ul') !== list) return

  if (event.type === 'click') {
    const menuitem = target.closest('[role="menuitem"], [role="menuitemradio"]')
    if (!menuitem) return

    const input = menuitem.querySelector('input')

    // Ignore double event caused by inputs nested in labels
    // Known issue: This will wrongly ignore a legit click event on an already checked input,
    // but inputs are not expected to be visible in the menu items.
    // I've found no way to discriminate the legit event from the echo one, and we don't want to trigger the selected event twice.
    if (menuitem.tagName === 'LABEL' && target === input) return

    // An input inside a label will be committed as a change event (we assume it's a radio input),
    // unless the input is already checked, so we need to commit on click (to close the popup)
    const onlyCommitOnChangeEvent = menuitem.tagName === 'LABEL' && input && !input.checked
    if (!onlyCommitOnChangeEvent) {
      commit(menuitem, list)
    }
  } else if (event.type === 'change') {
    const menuitem = target.closest('[role="menuitemradio"], [role="menuitemcheckbox"]')
    if (menuitem) commit(menuitem, list)
  }
}

function updateChecked(selected: Element, list: Element) {
  for (const el of list.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
    const input = el.querySelector('input[type="radio"], input[type="checkbox"]')
    let checkState = (el === selected).toString()
    if (input instanceof HTMLInputElement) {
      checkState = input.indeterminate ? 'mixed' : input.checked.toString()
    }
    el.setAttribute('aria-checked', checkState)
  }
}

function commit(selected: Element, list: Element) {
  if (selected.hasAttribute('disabled') || selected.getAttribute('aria-disabled') === 'true') return
  const menu = selected.closest('details-menu')
  if (!menu) return

  const dispatched = menu.dispatchEvent(
    new CustomEvent('details-menu-select', {
      cancelable: true,
      detail: {relatedTarget: selected}
    })
  )
  if (!dispatched) return

  updateLabel(selected, list)
  updateChecked(selected, list)
  if (selected.getAttribute('role') !== 'menuitemcheckbox') close(list)
  menu.dispatchEvent(
    new CustomEvent('details-menu-selected', {
      detail: {relatedTarget: selected}
    })
  )
}

function keydown(list: Element, menu: ActionListElement, event: Event) {
  if (!(event instanceof KeyboardEvent)) return
  // Ignore key presses from nested details.
  if (list.querySelector('details[open]')) return
  const state = states.get(menu)
  if (!state || state.isComposing) return

  const isSummaryFocused = event.target instanceof Element && event.target.tagName === 'SUMMARY'

  switch (event.key) {
    case 'Escape':
      if (list.hasAttribute('open')) {
        close(list)
        event.preventDefault()
        event.stopPropagation()
      }
      break
    case 'ArrowDown':
      {
        if (isSummaryFocused && !list.hasAttribute('open')) {
          list.setAttribute('open', '')
        }
        const target = sibling(list, true)
        if (target) target.focus()
        event.preventDefault()
      }
      break
    case 'ArrowUp':
      {
        if (isSummaryFocused && !list.hasAttribute('open')) {
          list.setAttribute('open', '')
        }
        const target = sibling(list, false)
        if (target) target.focus()
        event.preventDefault()
      }
      break
    case 'n':
      {
        if (ctrlBindings && event.ctrlKey) {
          const target = sibling(list, true)
          if (target) target.focus()
          event.preventDefault()
        }
      }
      break
    case 'p':
      {
        if (ctrlBindings && event.ctrlKey) {
          const target = sibling(list, false)
          if (target) target.focus()
          event.preventDefault()
        }
      }
      break
    case ' ':
    case 'Enter':
      {
        const selected = document.activeElement
        if (selected instanceof HTMLElement && isMenuItem(selected) && selected.closest('details') === list) {
          event.preventDefault()
          event.stopPropagation()
          selected.click()
        }
      }
      break
  }
}

function isMenuItem(el: Element): boolean {
  const role = el.getAttribute('role')
  return role === 'menuitem' || role === 'menuitemcheckbox' || role === 'menuitemradio'
}

function close(list: Element) {
  const wasOpen = list.hasAttribute('open')
  if (!wasOpen) return
  list.removeAttribute('open')
  const summary = list.querySelector('summary')
  if (summary) summary.focus()
}

function updateLabel(item: Element, list: Element) {
  const button = list.querySelector('[data-menu-button]')
  if (!button) return

  const text = labelText(item)
  if (text) {
    button.textContent = text
  } else {
    const html = labelHTML(item)
    if (html) button.innerHTML = html
  }
}

function labelText(el: Element | null): string | null {
  if (!el) return null
  const textEl = el.hasAttribute('data-menu-button-text') ? el : el.querySelector('[data-menu-button-text]')

  if (!textEl) return null
  return textEl.getAttribute('data-menu-button-text') || textEl.textContent
}

function labelHTML(el: Element | null): string | null {
  if (!el) return null
  const contentsEl = el.hasAttribute('data-menu-button-contents') ? el : el.querySelector('[data-menu-button-contents]')

  return contentsEl ? contentsEl.innerHTML : null
}

function trackComposition(menu: Element, event: Event) {
  const state = states.get(menu)
  if (!state) return
  state.isComposing = event.type === 'compositionstart'
}

declare global {
  interface Window {
    ActionListElement: typeof ActionListElement
  }
  interface HTMLElementTagNameMap {
    'details-menu': ActionListElement
  }
}

export default ActionListElement

if (!window.customElements.get('details-menu')) {
  window.ActionListElement = ActionListElement
  window.customElements.define('details-menu', ActionListElement)
}

document.addEventListener('DOMContentLoaded', ActionListElement)
