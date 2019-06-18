import styled from 'styled-components'
import {Box} from '@primer/components'

const Table = styled.table`
  display: table !important;
  border-collapse: separate;
  border-spacing: 0 4px;

  tr,
  td,
  th {
    border: 0 !important;
  }

  td,
  th {
    text-align: left;
  }

  tr {
    background-color: transparent !important;
  }
`

Table.Row = styled(Box).attrs({as: 'tr'})``
Table.Cell = styled(Box).attrs({as: 'td'})``

export default Table
