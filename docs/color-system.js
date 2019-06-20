import React from 'react'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'
import styled from 'styled-components'
import {Box, StyledOcticon, Text} from '@primer/components'
import {Zap} from '@githubprimer/octicons-react'
import {colors, getPaletteByName} from './color-variables'
import Table from './Table'

export function PaletteTable(props) {
  const {columns = [], hasHeader, ...rest} = props
  const {children = <PaletteTableFragment columns={columns} {...rest} />} = rest
  return (
    <Table {...rest}>
      {hasHeader ? (
        <thead>
          <tr>
            {getColumns(columns).map(col => (
              <th key={col.title}>{col.title}</th>
            ))}
          </tr>
        </thead>
      ) : null}
      {children}
    </Table>
  )
}

export function PaletteTableFragment(props) {
  const {children, columns = [], name, type, sparse, prefix = type, ...rest} = props
  let values = props.values
  if (name) {
    values = getPaletteByName(name).values
  }
  if (type && sparse) {
    values = values.filter(v => v.aliases[type])
  }
  if (!values || values.length === 0) {
    return null
  }
  const cols = getColumns(columns)
  return (
    <tbody {...rest}>
      {children}
      {values.map(row => {
        const cellProps = {type, ...row}
        const valueProps = {prefix, type, ...row}
        return (
          <tr key={row.value}>
            {cols.map(({Cell = PaletteCell, Value = PaletteValue, title}) => (
              <Cell key={title} {...cellProps}>
                <Value {...valueProps} />
              </Cell>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

PaletteTable.defaultProps = {
  columns: ['alias', 'className', 'variable', 'value'],
  hasHeader: true
}

PaletteTableFragment.defaultProps = {
  type: 'bg',
  columns: PaletteTable.defaultProps.columns
}

PaletteTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        title: PropTypes.string,
        Cell: PropTypes.func
      })
    ])
  ),
  name: PropTypes.string,
  prefix: PropTypes.string,
  type: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      aliases: PropTypes.object
    })
  )
}

export function PaletteCell(props) {
  return <Box {...props} />
}

PaletteCell.defaultProps = {
  as: 'td'
}

PaletteCell.propTypes = {
  value: PropTypes.string.isRequired
}

PaletteCell.Alias = ({aliases, type, ...rest}) =>
  aliases && aliases[type] ? (
    <PaletteCell.Smart type={type} {...rest}>
      <StyledOcticon icon={Zap} mr={2} />
      <Var>.{aliases[type]}</Var>
    </PaletteCell.Smart>
  ) : (
    <td />
  )
PaletteCell.Alias.propTypes = {
  aliases: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

PaletteCell.Smart = ({type, ...rest}) => {
  switch (type) {
    case 'fg':
    case 'text':
      return <PaletteCell.Text {...rest} />
    case 'border':
      return <PaletteCell.Border {...rest} />
    case 'bg':
    default:
      return <PaletteCell.Background {...rest} />
  }
}
PaletteCell.Smart.propTypes = {
  type: PropTypes.string.isRequired
}

PaletteCell.Background = ({value, ...rest}) => <PaletteCell bg={value} color={overlayColor(value)} {...rest} />

PaletteCell.Text = ({value, ...rest}) => <PaletteCell color={value} bg={overlayColor(value)} {...rest} />

PaletteCell.Border = ({value, ...rest}) => (
  <PaletteCell bg="white" style={{border: `1px solid ${value} !important`}} {...rest} />
)

export function PaletteValue({value, ...rest}) {
  return <Var {...rest}>{value}</Var>
}

PaletteValue.Variable = ({variable}) => <Var>${variable}</Var>
PaletteValue.Variable.propTypes = {
  variable: PropTypes.string.isRequired
}

PaletteValue.PrefixedClass = ({prefix, slug}) => (
  <Var>
    .{prefix}-{slug}
  </Var>
)
PaletteValue.PrefixedClass.propTypes = {
  prefix: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

PaletteTable.columns = {
  variable: {
    title: 'Variable',
    Cell: PaletteCell.Background,
    Value: PaletteValue.Variable
  },
  value: {
    title: 'Value',
    Cell: PaletteCell.Background,
    Value: PaletteValue
  },
  background: {
    title: 'Background',
    Cell: PaletteCell.Background,
    Value: PaletteCell.PrefixedClass
  },
  foreground: {
    title: 'Foreground',
    Cell: PaletteCell.Text,
    Value: PaletteCell.PrefixedClass
  },
  className: {
    title: 'Class',
    Cell: PaletteCell.Background,
    Value: PaletteValue.PrefixedClass
  },
  alias: {
    title: 'Alias',
    Cell: PaletteCell.Alias
  }
}

export const Var = styled(Text).attrs({
  as: 'var',
  fontFamily: 'mono',
  fontStyle: 'normal'
})`
  white-space: nowrap;
`

export const PaletteHeading = ({indicatorColor, children, ...rest}) => (
  <Text as="th" fontWeight="bold" {...rest} style={{borderBottom: `2px solid ${colors.black} !important`}}>
    <Box pt={3}>{children}</Box>
  </Text>
)

const $overlayColorCache = new Map()
export function overlayColor(bg) {
  if (!bg) {
    throw new Error(`overlayColor() expects a color string, but got: ${JSON.stringify(bg)}`)
  }
  if ($overlayColorCache.has(bg)) {
    return $overlayColorCache.get(bg)
  } else {
    const result = chroma(bg).luminance() > 0.5 ? colors.black : colors.white
    $overlayColorCache.set(bg, result)
    return result
  }
}

function getColumns(columns) {
  return columns.map(col => PaletteTable.columns[col] || col).filter(col => col)
}
