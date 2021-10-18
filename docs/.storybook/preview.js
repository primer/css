import '../../src/docs.scss'
import '../../src/index.scss'
import '../../src/base/index.scss'

const customViewports = {
  widthsm: {
    name: 'width-sm [544px]',
    styles: {
      width: '544px',
      height: '100vh'
    }
  },
  widthmd: {
    name: 'width-md [768px]',
    styles: {
      width: '768px',
      height: '100vh'
    }
  },
  widthlg: {
    name: 'width-lg [1012px]',
    styles: {
      width: '1012px',
      height: '100vh'
    }
  },
  widthxl: {
    name: 'width-xl [1280px]',
    styles: {
      width: '1280px',
      height: '100vh'
    }
  }
}

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true
  },

  layout: 'fullscreen',
  html: {
    root: '#story' // target id for html tab (should be direct parent of <Story /> for easy copy/paste)
  },
  viewport: {viewports: customViewports}
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'light_colorblind', 'dark', 'dark_dimmed', 'dark_high_contrast', 'dark_colorblind', 'all'],
      showName: true
    }
  }
}

export const decorators = [
  (Story, context) => {
    if (context.globals.theme === 'all') {
      return (
        <div class="theme-wrap">
          <div data-color-mode="light" data-light-theme="light" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="light" data-light-theme="light_colorblind" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark_dimmed" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark_high_contrast" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark_colorblind" className="story-wrap" id="story">
            <Story {...context} />
          </div>
        </div>
      )
    }

    if (context.globals.theme === 'light') {
      return (
        <div data-color-mode="light" data-light-theme="light" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'light_colorblind') {
      return (
        <div data-color-mode="light" data-light-theme="light_colorblind" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark_dimmed') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark_dimmed" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark_high_contrast') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark_high_contrast" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark_colorblind') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark_colorblind" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    return (
      <div className="story-wrap" id="story">
        <Story {...context} />
      </div>
    )
  }
]
