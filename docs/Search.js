// downshift applies htmlFor for the label, but eslint doesn't recognize that
// also disabling the specific line causes some weirdness when running lint for syntax
/* eslint-disable jsx-a11y/label-has-for */
import React, {useState} from 'react'
import Router from 'next/router'
import lunr from 'lunr'
import {Relative, Box, Text} from '@primer/components'
import SearchItem from './SearchItem'
import Downshift from 'downshift'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import ResponsiveSearchInput from './ResponsiveSearchInput'

const generateBreadcrumb = path => {
  const a = path
    .toLowerCase()
    .split('-')
    .join(' ')
  const b = a.split('/').join(' / ')
  return b
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
}

function Search({subfolder, documents}) {
  const idx = lunr(function() {
    this.ref('path') //eslint-disable-line
    this.field('title')//eslint-disable-line
    this.field('content')//eslint-disable-line
    this.field('keywords')//eslint-disable-line
    for (const doc of Object.values(documents)) {
      this.add(doc) //eslint-disable-line
    }
  })

  const [results, setResults] = useState([])

  const onChange = e => {
    if (e.target) {
      setResults(idx.search(`${e.target.value}*`))
    }
  }

  const renderResults = (selectedItem, getItemProps, highlightedIndex) => {
    if (results.length < 1) {
      return (
        <Text as={Relative} p={2} color="black">
          No results found
        </Text>
      )
    }
    return results.map((result, index) => {
      const doc = documents[result.ref]
      if (!doc.path) return
      return (
        <SearchItem //eslint-disable-line
          {...getItemProps({
            item: result,
            index,
            key: result.ref,
            href: `/${subfolder}/${doc.path}`,
            isHighlighted: highlightedIndex === index
          })}
        >
          {doc.path && (
            <Text as="div" fontSize={0}>
              {generateBreadcrumb(doc.path)}
            </Text>
          )}
          {doc.title}
        </SearchItem>
      )
    })
  }

  function stateReducer(state, changes) {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          inputValue: ''
        }
      default:
        return changes
    }
  }

  const onSelect = item => {
    Router.push(`/${subfolder}/${item.ref}`)
  }

  return (
    <div>
      <Downshift
        onChange={onChange}
        itemToString={item => (item ? documents[item.ref].title : '')}
        stateReducer={stateReducer}
        onSelect={onSelect}
      >
        {({
          getInputProps,
          getMenuProps,
          getLabelProps,
          closeMenu,
          getItemProps,
          isOpen,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <label hidden {...getLabelProps()}>
              {' '}
              Search docs
            </label>
            <Box display={['none', 'none', 'none', 'flex']}>
              <SearchInput placeholder="Search" {...getInputProps({onChange})} />
            </Box>
            <Box
              display={['inline-block', 'inline-block', 'inline-block', 'none']}
              width={['100%', '100%', '100%', 'initial']}
            >
              <ResponsiveSearchInput closeMenu={closeMenu} {...getInputProps({onChange})} />
            </Box>
            <SearchResults color="black" open={isOpen} {...getMenuProps()}>
              {renderResults(selectedItem, getItemProps, highlightedIndex)}
            </SearchResults>
          </div>
        )}
      </Downshift>
    </div>
  )
}

export default Search
