import styled from 'styled-components'



const SearchItem = styled.a`
  display: block;
  text-decoration: none;
  color: #24292e;
  padding: 8px;
  &:focus, &:hover {
    color: #fff;
    background-color: #0366d6;
    text-decoration: none;
  }
`

export default SearchItem
