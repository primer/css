import '../../src/docs.scss'
import '../../src/index.scss'
import '../../src/base/index.scss'
import './preview.css'
import './storybook.css'
import clsx from 'clsx'
import {BADGE, BadgesConfig} from '@geometricpanda/storybook-addon-badges'

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
    badgesConfig: {
      [BADGE.DEPRECATED]: {
        title: 'Deprecated',
        tooltip: {
          desc: 'Please use a Primer View Component instead',
          links: [{title: 'See docs', href: 'https://primer.style/design/components'}],
        },
      },
      [BADGE.OBSOLETE]: {
        title: 'Outdated',
        tooltip: {
          desc: 'Information in this document may be outdated.',
        },
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
    const {parameters} = context
    const defaultStoryType = 'banner'
    const storyType = parameters.storyType || defaultStoryType
    const colorMode = context.globals.theme === '' ? 'light' : (context.globals.theme.startsWith('light') ? 'light' : 'dark')
    const lightTheme = context.globals.theme === '' ? 'light' : (colorMode === 'light' ? context.globals.theme : undefined)
    const darkTheme = context.globals.theme === '' ? 'dark' : (colorMode === 'dark' ? context.globals.theme : undefined)
    document.body.setAttribute('data-color-mode', colorMode)
    document.body.setAttribute('data-light-theme', lightTheme)
    document.body.setAttribute('data-dark-theme', darkTheme)
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
            {/* {parameters.storyType === 'banner' && (
              <div className="color-fg-danger border rounded-2 color-bg-danger p-3 color-border-danger-emphasis mb-5">
                Note: For the most up to date component documentation and guidelines, please reference Primer's core
                documentation site at <a href="https://primer.style">primer.style</a>.
              </div>
            )} */}
            <Story {...context} />
          </div>
        )}
      </>
    )
  },
]

export default preview
