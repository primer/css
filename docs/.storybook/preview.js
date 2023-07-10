import '../../src/docs.scss'
import '../../src/index.scss'
import '../../src/base/index.scss'
import './preview.css'
import './storybook.css'
import clsx from 'clsx'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'GettingStarting', 'Contributing', 'Utilities'],
      },
    },
  },
}

const primerThemes = [
  {value: 'light', left: '☀️', title: 'Light'},
  {value: 'light_colorblind', left: '☀️', title: 'Light Protanopia & Deuteranopia'},
  {value: 'light_tritanopia', left: '☀️', title: 'Light Tritanopia'},
  {value: 'light_high_contrast', left: '☀️', title: 'Light High Contrast'},
  {value: 'dark', left: '🌗', title: 'Dark'},
  {value: 'dark_dimmed', left: '🌗', title: 'Dark Dimmed'},
  {value: 'dark_colorblind', left: '🌗', title: 'Dark Protanopia & Deuteranopia'},
  {value: 'dark_tritanopia', left: '🌗', title: 'Dark Tritanopia'},
  {value: 'dark_high_contrast', left: '🌗', title: 'Dark High Contrast'},
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: [...primerThemes, {value: 'all', left: '', title: 'All'}],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export const decorators = [
  (Story, context) => {
    document.body.setAttribute('data-color-mode', context.globals.theme.startsWith('light') ? 'light' : 'dark')
    document.body.setAttribute(
      'data-light-theme',
      context.globals.theme.startsWith('light') ? context.globals.theme : undefined,
    )
    document.body.setAttribute(
      'data-dark-theme',
      context.globals.theme.startsWith('dark') ? context.globals.theme : undefined,
    )
    return (
      <>
        {context.globals.theme === 'all' ? (
          primerThemes.map(({value: theme}) => (
            <div
              key={theme}
              id="story"
              className={clsx(context.globals.theme === 'all' && 'story-wrap-grid', 'story-wrap')}
              data-color-mode={theme.startsWith('dark') ? 'dark' : 'light'}
              data-light-theme={theme.startsWith('light') ? theme : undefined}
              data-dark-theme={theme.startsWith('dark') ? theme : undefined}
            >
              <Story {...context} />
              {context.globals.theme === 'all' && <p className="theme-name">{theme}</p>}
            </div>
          ))
        ) : (
          <div className="story-wrap">
            <Story {...context} />
          </div>
        )}
      </>
    )
  },
]

export default preview
