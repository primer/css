import '../../src/docs.scss'
import '../../src/index.scss'
import '../../src/base/index.scss'
import '../src/stories/helpers/storybook-styles.scss'
import renderToHTML from '../src/stories/helpers/code-snippet-html-helper'

const customViewports = {
  minXS: {
    name: 'XS (min)',
    styles: {
      width: '375px',
      height: '100%'
    }
  },
  maxXS: {
    name: 'XS (max)',
    styles: {
      width: '543px',
      height: '100%'
    }
  },
  minSM: {
    name: 'SM (min)',
    styles: {
      width: '544px',
      height: '100%'
    }
  },
  maxSM: {
    name: 'SM (max)',
    styles: {
      width: '767px',
      height: '100%'
    }
  },
  minMD: {
    name: 'MD (min)',
    styles: {
      width: '768px',
      height: '100%'
    }
  },
  maxMD: {
    name: 'MD (max)',
    styles: {
      width: '1011px',
      height: '100%'
    }
  },
  minLG: {
    name: 'LG (min)',
    styles: {
      width: '1012px',
      height: '100%'
    }
  },
  maxLG: {
    name: 'LG (max)',
    styles: {
      width: '1279px',
      height: '100%'
    }
  },
  minXL: {
    name: 'XL (min)',
    styles: {
      width: '1280px',
      height: '100%'
    }
  },
  medXL: {
    name: 'XL (med)',
    styles: {
      width: '1440px',
      height: '100%'
    }
  }
}

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  docs: {
    transformSource: (src, storyContext) => renderToHTML(storyContext.storyFn)
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true
  },

  layout: 'padded',
  html: {
    root: '#story' // target id for html tab (should be direct parent of <Story /> for easy copy/paste)
  },
  viewport: {viewports: customViewports}
}

const themes = [
  'light',
  'light_colorblind',
  'light_high_contrast',
  'dark',
  'dark_dimmed',
  'dark_high_contrast',
  'dark_colorblind'
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [...themes, 'all'],
      showName: true
    }
  }
}

export const decorators = [
  (Story, context) => {
    return (
      <div class="theme-wrap">
        { themes.map((theme) => {
            if (context.globals.theme === theme || context.globals.theme === 'all') {
              return <div
                id="story"
                className="story-wrap"
                data-color-mode={theme.startsWith('dark') ? 'dark' : 'light'}
                data-light-theme={theme.startsWith('light') ? theme : undefined}
                data-dark-theme={theme.startsWith('dark') ? theme : undefined}
              >
                <Story {...context} />
              </div>
            }
          })}
      </div>
    )
  }
]
