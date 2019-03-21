import styled from 'styled-components'



const SearchItem = styled.a`
  display: block;
  text-decoration: none;
  color: ${props => props.isHighlighted ? '#fff' : '#24292e'};
  background-color: ${props => props.isHighlighted ? '#0366d6' : '#fff'};
  padding: 8px;
`

export default SearchItem
