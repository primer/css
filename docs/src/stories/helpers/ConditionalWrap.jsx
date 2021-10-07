import React from 'react'

export default ConditionalWrap = ({condition, wrap, children}) => (condition ? wrap(children) : children)
