import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Box} from '@primer/components'

const Table = styled.table`
  display: table !important;
  border-collapse: separate;
  border-spacing: ${props => props.borderSpacing};

  tr,
  td,
  th {
    border: 0 !important;
  }

  caption,
  td,
  th {
    padding: 4px 8px !important;
    text-align: left;
  }

  tr {
    background-color: transparent !important;
  }
`

Table.propTypes = {
  borderSpacing: PropTypes.string
}

Table.defaultProps = {
  borderSpacing: '0 4px'
}

Table.Row = styled(Box).attrs({as: 'tr'})``
Table.Cell = styled(Box).attrs({as: 'td'})``

export default Table
