import {Box} from '@primer/components'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {fontSize} from 'styled-system'

const Table = styled.table`
  display: table !important;
  width: 100%;
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
  borderSpacing: 0,
  cellPadding: '4px 8px',
  fontSize: [1, 1, 2]
}

Table.Row = props => <Box as="tr" {...props} />
Table.Cell = props => <Box as="td" {...props} />

export default Table
