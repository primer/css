import React, {useState} from 'react'
import lunr from 'lunr'
import styled from 'styled-components'
import Autocomplete from 'react-autocomplete'
import Router from 'next/router'
import {TextInput, Absolute, Relative, BorderBox, Box} from '@primer/components'
import documents from '../searchIndex'
import SearchInput from './SearchInput'
import SearchItem from './SearchItem'
import SearchResults from './SearchResults'

function Search() {
  const idx = lunr(function () {
    this.ref('path')
    this.field('title')
    this.field('content')
    this.field('keywords')
    Object.values(documents).forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  const [results, setResults] = useState([])
  const [value, setValue] = useState("")

  const onChange = (e) => {
    setValue(e.target.value)
    setResults(idx.search(e.target.value))
  }

  const renderItem = (item, isHighlighted) => {
    const doc = documents[item.ref]
    return (
      <SearchItem key={doc.title} isHighlighted={isHighlighted} href={`/css/${doc.path}`}>
        {doc.title}
      </SearchItem>
    )
  }

  return (
    <Box is={Relative}>
      <Autocomplete
        getItemValue={(item) => documents[item.ref].title}
        items={results}
        renderItem={(item, isHighlighted) => renderItem(item, isHighlighted)}
        value={value}
        onChange={(e) => onChange(e)}
        onSelect={(value, item) => Router.push(`/css/${item.ref}`)}
      />
    </Box>
  )
}

export default Search
