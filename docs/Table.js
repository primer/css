import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Box} from '@primer/components'
import {fontSize} from 'styled-system'

const Table = styled.table`
  display: table !important;
  border-collapse: separate;
  border-spacing: ${props => props.borderSpacing};
  ${fontSize};

  tr,
  td,
  th {
    border: 0 !important;
  }

  caption,
  td,
  th {
    padding: ${props => props.cellPadding} !important;
    text-align: left;
  }

  tr {
    background-color: transparent !important;
  }
`

Table.propTypes = {
  borderSpacing: PropTypes.any,
  cellPadding: PropTypes.any,
  ...fontSize.propTypes
}

Table.defaultProps = {
  borderSpacing: '0 4px',
  cellPadding: '4px 8px',
  fontSize: [1, 1, 2]
}

Table.Row = styled(Box).attrs({as: 'tr'})``
Table.Cell = styled(Box).attrs({as: 'td'})``

export default Table
