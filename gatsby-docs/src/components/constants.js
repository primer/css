import {themeGet, get as getKey} from 'styled-system'
import {theme} from '@primer/components'

export const get = key => themeGet(key, getKey(theme, key))

export const CONTENT_MAX_WIDTH = 1012
