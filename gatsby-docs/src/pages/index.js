import React from 'react'
import { graphql } from 'gatsby'
import {BaseStyles, theme} from '@primer/components'
import Layout from '../components/Layout'

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/(docs)/"}}) {
      edges {
        node {
          base
          ext
          dir
          id
          name
          relativeDirectory
        }
      }
    }
  }
`

const App = (props) => {
  return (
    <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
      <Layout {...props} />
    </BaseStyles>
  )
}

export default App
