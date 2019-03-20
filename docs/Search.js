import { Component } from 'react'
import lunr from 'lunr'
import documents from '../searchIndex'

class Search extends Component {
  idx = lunr(function () {
    this.ref('path')
    this.field('title')
    this.field('content')
    this.field('keywords')
    Object.values(documents).forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  onClick = () => {
    console.log(this.idx.search("alerts"))
  }

  render() {
    return (
      <button onClick={this.onClick}>search!</button>
    )
  }
}

export default Search
