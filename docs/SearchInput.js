import {TextInput} from '@primer/components'
import styled from 'styled-components'

const SearchInput = styled(TextInput)`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px;
  border: 1px solid transparent;
  &:focus,
  &:active {
    border: 1px solid rgba(255, 255, 255, 0.15);
    outline: none;
    box-shadow: none;
  }
`

export default SearchInput
