import React, {useState} from 'react'
import lunr from 'lunr'
import {TextInput, Absolute, Relative, BorderBox, Box} from '@primer/components'
import Link from './Link'
import documents from '../searchIndex'
import SearchInput from './SearchInput'
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
  const [open, setOpen] = useState(false)

  function openMenu() {
    if (!open) {
      setOpen(true)
      document.addEventListener('click', closeMenu);
    }
  }

  function closeMenu() {
    setOpen(false)
    document.removeEventListener('click', closeMenu);
  }

  const onChange = (e) => {
    setValue(e.target.value)
    setResults(idx.search(e.target.value))
    openMenu()
  }

  const renderResults = () => {
    return results.map((result) => {
      const doc = documents[result.ref]
      return (
        <Box><Link href={`/css/${doc.path}`}>{doc.title}</Link></Box>
      )
    })
  }

  return (
    <Box is={Relative}>
      <SearchInput aria-label="search docs" onChange={e => onChange(e)}/>
      {results.length > 0 &&
        <SearchResults open={open}>
          {renderResults()}
        </SearchResults>
      }
    </Box>
  )
}

export default Search
