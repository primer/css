import React from 'react'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'
import styled from 'styled-components'
import {Box, Text} from '@primer/components'
import {colors, getPaletteByName} from './color-variables'
import Table from './Table'

export function PaletteTable(props) {
  const {children, columns, name, type, sparse, prefix = type, ...rest} = props
  const cols = columns.map(name => PaletteTable.columns[name]).filter(d => d)
  let {values} = getPaletteByName(name)
  if (sparse && values) {
    values = values.filter(v => v.aliases[type])
  }
  if (!values || values.length === 0) {
    return null
  }
  return (
    <Table {...rest}>
      {children}
      <thead>
        <tr>
          {cols.map(col => (
            <th key={col.title}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map(value => {
          const cellProps = {
            type,
            prefix,
            width: 1 / columns.length,
            ...value
          }
          return (
            <tr key={value.value}>
              {cols.map(({Cell, title}) => (
                <Cell key={title} {...cellProps} />
              ))}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

PaletteTable.defaultProps = {
  type: 'bg',
  columns: ['alias', 'className', 'variable', 'value']
}

PaletteTable.columns = {
  variable: {
    title: 'Variable',
    Cell: props => (
      <PaletteCell {...props}>
        <Var>${props.variable}</Var>
      </PaletteCell>
    )
  },
  value: {
    title: 'Value',
    Cell: props => (
      <PaletteCell {...props}>
        <Var>{props.value}</Var>
      </PaletteCell>
    )
  },
  className: {
    title: 'Class',
    Cell: props => (
      <PaletteCell {...props}>
        <Var>
          .{props.prefix}-{props.slug}
        </Var>
      </PaletteCell>
    )
  },
  alias: {
    title: 'Alias',
    Cell: ({aliases, ...props}) =>
      aliases[props.type] ? (
        <PaletteCell {...props}>
          <Var>.{aliases[props.type]}</Var>
        </PaletteCell>
      ) : (
        <td />
      )
  }
}

PaletteTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(PaletteTable.columns))),
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  type: PropTypes.string
}

export function PaletteCell({value, type, ...rest}) {
  const props = {}
  switch (type) {
    case 'fg':
    case 'text':
      props.color = value
      props.bg = overlayColor(value)
      break
    case 'border':
      props.bg = 'white'
      props.style = {border: `1px solid ${value} !important`}
      break
    case 'bg':
    default:
      props.bg = value
      props.color = overlayColor(value)
  }
  return <Box {...props} {...rest} />
}

PaletteCell.defaultProps = {
  as: 'td'
}

PaletteCell.propTypes = {
  type: PropTypes.oneOf(['text', 'border', 'bg']),
  value: PropTypes.string.isRequired
}

export const Var = styled(Text).attrs({
  as: 'var',
  fontFamily: 'mono',
  fontSize: 1,
  fontStyle: 'normal'
})`
  white-space: nowrap;
`

const overlayColorCache = new Map()
export function overlayColor(bg) {
  if (!bg) {
    throw new Error(`overlayColor() expects a color string, but got: ${JSON.stringify(bg)}`)
  }
  if (overlayColorCache.has(bg)) {
    return overlayColorCache.get(bg)
  } else {
    const result = chroma(bg).luminance() > 0.5 ? colors.black : colors.white
    overlayColorCache.set(bg, result)
    return result
  }
}
