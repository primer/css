import styled from 'styled-components'

const SearchResults = styled.div`
  box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15);
  width: 100%;
  overflow: auto;
  right: 0;
  background-color: #fff;
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;

  @media (min-width: 1012px) {
    width: 0;
    min-width: 320px;
    height: auto;
    max-height: 240px;
    border-radius: 3px;
    border: 1px solid #e1e4e8;
    padding-bottom: 0;
  }
`

export default SearchResults
