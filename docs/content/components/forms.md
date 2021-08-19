---
title: Forms
path: components/forms
status: Stable
source: 'https://github.com/primer/css/tree/main/src/forms'
bundle: forms
---

Style individual form controls and utilize common layouts.

Overview:

- We reset several elements' default styles for cross browser consistency and easier manipulation later. This includes `<fieldset>`s, WebKit validation bubbles, and most textual `<input>`s.
- Specific types of textual `<input>`s are styled automatically, but `.form-control` is available should you need it.
- Always declare a `type` on your `<button>`s.
- Form layouts rely on form groups.

## Kitchen sink

All our inputs and buttons side-by-side for easy testing of sizing and alignment with one another.

```html live
<p>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button" aria-expanded="false" aria-haspopup="true">
    Select menu
    <span class="dropdown-caret">
  </button>
  <input class="form-control" type="text" placeholder="Standard input" aria-label="Repository description" />
  <input class="form-control input-monospace" type="text" placeholder="Monospace input" aria-label="SHA" />
  <select class="form-select" aria-label="Important decision">
    <option>Select</option>
    <option value="option 2">Option 2</option>
  </select>
</p>

<p>
  <button class="btn btn-sm" type="button">Small button</button>
  <button class="btn btn-sm" type="button" aria-expanded="false" aria-haspopup="true">
    Select menu
    <span class="dropdown-caret">
  </button>
  <input class="form-control input-sm" type="text" placeholder="Small input" aria-label="Repository description" />
  <select class="form-select select-sm" aria-label="Important decision">
    <option>Select</option>
    <option value="option 1">Option 1</option>
  </select>
</p>
```

## Example form

Form controls in Primer CSS currently have no basic layout specified (this is by design). You'll need to use `<fieldset>`s, `<div>`s, or other elements and styles to rearrange them.

```html live
<form>
  <label for="name">Name</label>
  <input class="form-control" type="text" id="name" />

  <label for="email">Email address</label>
  <input class="form-control" type="email" id="email" />

  <label> <input type="checkbox" /> Remember me </label>

  <label> <input type="radio" id="potato" name="radio-group-example" checked /> Potato </label>
  <label> <input type="radio" id="tomato" name="radio-group-example" /> Tomato </label>

  <button class="btn" type="submit">Submit</button>
</form>
```

## Inputs

### Sizing

Make inputs smaller, larger, or full-width with an additional class.

#### Small

```html live
<form>
  <input class="form-control input-sm" type="text" placeholder="Small input" aria-label="Small input" />
</form>
```

#### Large

```html live
<form>
  <input class="form-control input-lg" type="text" placeholder="Large input" aria-label="Large input" />
</form>
```

#### Block

```html live
<form>
  <input class="form-control input-block" type="text" placeholder="Full-width input" aria-label="Full-width input" />
</form>
```

### Input group

Attached an input and button to one another.

```html live
<form>
  <div class="input-group">
    <input class="form-control" type="text" placeholder="Username" aria-label="Username">
    <span class="input-group-button">
      <button class="btn" type="button" aria-label="Copy to clipboard">
        <!-- <%= octicon "clippy" %> -->
        <svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>
      </button>
    </span>
  </div>
</form>
```

## Customization

### Form contrast

Textual form controls have a white background by default. You can change this to a light gray with `.input-contrast`.

```html live
<form>
  <input class="form-control" type="text" placeholder="Default input" aria-label="Default input" />
  <input class="form-control input-contrast" type="text" placeholder="Input with contrast" aria-label="Input with contrast" />
</form>
```

### Disabled state

Add the `disabled` attribute to make a `.form-control` appear disabled.

```html live
<form>
  <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input" disabled />
</form>
```

### Hide WebKit's contact info autofill icon

WebKit sometimes gets confused and tries to add an icon/dropdown to autofill contact information on fields that may not be appropriate (such as input for number of users). Use this class to override the display of this icon.

```html live
<form>
  <input
    class="form-control input-hide-webkit-autofill"
    placeholder="Hide Webkit's contact autofill on this input"
    type="text"
    aria-label="Hide Webkit's contact autofill on this input"
  />
</form>
```

## Selects

Primer CSS adds light `height` and `vertical-align` styles to `<select>`s for all browsers to render them consistently with textual inputs.

```html live
<form>
  <select class="form-select" aria-label="Preference">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>
</form>
```

### Small

Use the `.select-sm` class to resize both default and custom `<select>`s to match the size of [our small buttons](./buttons#default-buttons).

```html live
<select class="form-select select-sm" aria-label="Preference">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>

<button class="btn btn-sm ml-1"> Small button</button>
```

## Form groups

```html live
<form>
  <div class="form-group">
    <div class="form-group-header">
      <label for="example-text">Example Text</label>
    </div>
    <div class="form-group-body">
      <input class="form-control" type="text" value="Example Value" id="example-text" />
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-header">
      <label for="example-select">Example Select</label>
    </div>
    <div class="form-group-body">
      <select class="form-select" id="example-select">
        <option>Choose an option</option>
        <option>Git</option>
        <option>Subversion</option>
        <option>Social Coding</option>
        <option>Beets</option>
        <option>Bears</option>
        <option>Battlestar Galactica</option>
      </select>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-header">
      <label for="example-textarea">Example Textarea</label>
    </div>
    <div class="form-group-body">
      <textarea class="form-control" id="example-textarea"></textarea>
    </div>
  </div>
</form>
```

## Form group validation

Convey success, errors and warnings for form groups. For github.com consider using the [`<auto-check>`](https://github.github.io/web-systems-documentation/#custom-elements-auto-check-md) element to perform server-side validation on an input.

### Success

If the input is **valid**, add the `.successed` class to the `<div class="form-group">` element. Next add/update a success message to the `.note` element, as well as the `.success` class.

```html live
<form class="pb-6">
  <div class="form-group successed">
    <div class="form-group-header">
      <label for="username-input">Username</label>
    </div>
    <div class="form-group-body">
      <input
        class="form-control"
        type="text"
        value="monalisa"
        id="username-input"
        aria-describedby="username-input-validation"
      />
    </div>
    <p class="note success" id="username-input-validation">monalisa is available</p>
  </div>
</form>
```

### Error

If the input is **not valid**, add the `.errored` class to the `<div class="form-group">` element. Next add/update an error message to the `.note` element, as well as the `.error` class.

```html live
<form class="pb-6">
  <div class="form-group errored">
    <div class="form-group-header">
      <label for="username-input">Username</label>
    </div>
    <div class="form-group-body">
      <input
        class="form-control"
        type="text"
        value="monalisa"
        id="username-input"
        aria-describedby="username-input-validation"
      />
    </div>
    <p class="note error" id="username-input-validation">monalisa is not available. monalisa-beep, monalisa-cyber, or monalisa87 are available.</p>
  </div>
</form>
  ```

### Warning

If the input should show a **warning**, add the `.warn` class to the `<div class="form-group">` element. Next add/update a warning message to the `.note` element, as well as the `.warning` class.

  ```html live
<form class="pb-6">
  <div class="form-group warn">
    <div class="form-group-header">
      <label for="username-input">Username</label>
    </div>
    <div class="form-group-body">
      <input
        class="form-control"
        type="text"
        value="monalisa-monalisa-monalisa-monalisa-"
        id="username-input"
        aria-describedby="username-input-validation"
      />
    </div>
    <p class="note warning" id="username-input-validation">36 of maximum 39 characters entered.</p>
  </div>
</form>
```

### Form actions

Align buttons to the right—via `float: right` on the buttons—in forms with `.form-actions`. The floats are automatically cleared for you.

```html live
<div class="form-actions">
  <button type="submit" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>
```

## Checkboxes and radios

Utilities to control alignment and styling of checkbox and radio controls.

```html live
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked" aria-describedby="help-text-for-checkbox" />
      Available for hire
    </label>
    <p class="note" id="help-text-for-checkbox">
      This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
    </p>
  </div>
</form>
```

You may also add emphasis to the label:

```html live
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked" />
      <em class="highlight">Available for hire</em>
    </label>
  </div>
</form>
```

### Toggle content visibility based on a checkbox or radio button state

Content that is hidden by default should only be done so if it is non-essential for the context of the surrounding content. Be sure to use the `aria-live="polite"` attribute on the parent label for added content to be announced when displayed.

```html live
<form>
  <div class="form-checkbox">
    <label>
      <input type="radio" name="hireme" />
      Not available for hire
    </label>
  </div>
  <div class="form-checkbox">
    <label aria-live="polite">
      <input type="radio" class="form-checkbox-details-trigger" name="hireme" />
      Available for hire
      <span class="form-checkbox-details text-normal">
        <span class="d-block mb-1">Available hours per week</span>
        <input type="text" name="" class="form-control input-contrast" size="3" />
        <span class="text-small color-text-secondary pl-2">hours per week</span>
      </span>
    </label>
  </div>
</form>
```

## Radio group

Radio groups are tab like controls. Their blue border gives extra emphasis to what is selected.

```html live
<form>
  <div class="radio-group">
    <input class="radio-input" id="option-a" type="radio" name="options">
    <label class="radio-label" for="option-a">Option A</label>
    <input class="radio-input" id="option-b" type="radio" name="options">
    <label class="radio-label" for="option-b">Option B</label>
    <input class="radio-input" id="option-c" type="radio" name="options">
    <label class="radio-label" for="option-c">Option C</label>
  </div>
</form>
```
