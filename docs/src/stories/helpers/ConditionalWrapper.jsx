import React from 'react'

// reference https://gist.github.com/kitze/23d82bb9eb0baabfd03a6a720b1d637f

const ConditionalWrapper = ({condition, wrap, children}) => (condition ? wrap(children) : children)

export default ConditionalWrapper
