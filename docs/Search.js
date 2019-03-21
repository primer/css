import React, {useState} from 'react'
import lunr from 'lunr'
import uuid from 'uuid'
import Autocomplete from 'react-autocomplete'
import Router from 'next/router'
import {Relative, Box} from '@primer/components'
import documents from '../searchIndex'
import SearchItem from './SearchItem'

function Search() {
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
  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.target.value)
    setResults(idx.search(e.target.value))
  }

  const renderItem = (item, isHighlighted) => {
    const doc = documents[item.ref]
    return (
      <SearchItem key={uuid()} isHighlighted={isHighlighted} href={`/css/${doc.path}`}>
        {doc.title}
      </SearchItem>
    )
  }

  return (
    <Box is={Relative}>
      <Autocomplete
        getItemValue={item => documents[item.ref].title}
        items={results}
        renderItem={(item, isHighlighted) => renderItem(item, isHighlighted)}
        value={value}
        onChange={e => onChange(e)}
        onSelect={(value, item) => Router.push(`/css/${item.ref}`)}
      />
    </Box>
  )
}

export default Search
