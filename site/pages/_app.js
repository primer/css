import React from 'react'
import App from 'next/app'
import {nest} from 'recompose'
import {BaseStyles} from '@primer/components'

export default nest(App, BaseStyles)
