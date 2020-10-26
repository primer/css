import primerStyles from '!!raw-loader!postcss-loader!../../../../../src/docs.scss'
import {Flex} from '@primer/components'
import {Frame} from '@primer/gatsby-theme-doctocat'
import {MoonIcon, SunIcon} from '@primer/octicons-react'
import React from 'react'

class ColorModeChangeEvent extends CustomEvent {
  constructor(mode) {
    super('color-mode-change', {detail: mode})
  }
}

function LivePreviewWrapper({children}) {
  const [colorMode, setColorModeState] = React.useState('light')

  const setColorMode = mode => {
    setColorModeState(mode)
    window.dispatchEvent(new ColorModeChangeEvent(mode))
  }

  React.useEffect(() => {
    const callback = e => setColorModeState(e.detail)
    window.addEventListener('color-mode-change', callback)

    return () => {
      window.removeEventListener('color-mode-change', callback)
    }
  }, [])

  return (
    <Frame>
      <link rel="stylesheet" href="https://github.com/site/assets/styleguide.css" />
      <style>{primerStyles}</style>
      <div data-color-mode={colorMode}>
        <Flex pt={2} px={2} justifyContent="flex-end">
          <button
            className="btn"
            aria-label={colorMode === 'light' ? 'Activate dark mode' : 'Activate light mode'}
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </Flex>
        <div className="frame-example p-3">{children}</div>
      </div>
    </Frame>
  )
}

export default LivePreviewWrapper
