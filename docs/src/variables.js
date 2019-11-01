import React from 'react'
import {Box, Flex, Link, Text, Tooltip} from '@primer/components'
import Octicon, {Alert} from '@primer/octicons-react'
import themeGet from '@styled-system/theme-get'
import DoctocatTable from '@primer/gatsby-theme-doctocat/src/components/table'
import styled from 'styled-components'
import variables from '@primer/css/dist/variables.json'
import {variableDeprecations} from '@primer/css/deprecations'

const Table = styled(DoctocatTable)`
  font-size: ${themeGet('fontSizes.1')}px;

  td,
  th {
    text-align: left;
    vertical-align: top;
  }

  tr:target {
    th,
    td {
      background-color: ${themeGet('colors.yellow.0')};
    }
  }
`

for (const name of Object.keys(variables)) {
  if (name.endsWith('-font')) {
    delete variables[name]
  }
}

const variablesByFile = Object.entries(variables).reduce((map, [name, variable]) => {
  const {
    source: {path}
  } = variable

  variable.name = name
  variable.deprecated = variableDeprecations.has(name) ? 1 : 0

  if (map.has(path)) {
    map.get(path).push(variable)
  } else {
    map.set(path, [variable])
  }
  return map
}, new Map())

for (const [path, variables] of variablesByFile.entries()) {
  variables.sort((a, b) => {
    return a.deprecated - b.deprecated || a.source.line - b.source.line
  })
}

function Variables(props) {
  return Array.from(variablesByFile.entries()).map(([path, variables]) => (
    <>
      <h3>
        Defined in <Link href={`https://github.com/primer/css/tree/master/${path}`}>{path}</Link>
      </h3>
      <Table {...props}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Aliases</th>
          </tr>
        </thead>
        <tbody>
          {variables
            .map(({name, computed, values, source, refs}) => (
              <tr id={name}>
                <th scope="row">
                  <Flex justifyContent="space-between">
                    <Link href={`#${name}`} color="gray.4" mr={2}>
                      #
                    </Link>
                    <Flex.Item flex="1">
                      <Link href={`https://github.com/primer/css/tree/master/${source.path}#L${source.line}`}>
                        <Mono nowrap>{name}</Mono>
                      </Link>
                    </Flex.Item>
                    <Flex.Item justifySelf="end">
                      <DeprecationFlag variable={name} ml={2} />
                    </Flex.Item>
                  </Flex>
                </th>
                <td>
                  <Swatch value={computed} mr={2} />
                  <Mono nowrap>{computed}</Mono>
                </td>
                <td>
                  <RefList refs={refs} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  ))
}

function Mono({nowrap, ...rest}) {
  return <Text fontFamily="mono" css={nowrap ? {whiteSpace: 'nowrap'} : null} {...rest} />
}

function Swatch({value, ...rest}) {
  return /^(#|rgb|hsl)/.test(value) ? <SwatchBox {...rest} bg={value} /> : null
}

const SwatchBox = styled(Text)`
  display: inline-block;
  vertical-align: baseline;
  width: ${p => p.size};
  height: ${p => p.size};
  border: 1px solid ${themeGet('colors.gray.3')};
  border-radius: ${themeGet('radii.1')}px;
  margin-bottom: -2px;
`

Swatch.defaultProps = {
  size: '1em'
}

function RefList({refs}) {
  const last = refs.length - 1
  return refs.map((ref, i) => [
    <Link href={`#${ref}`}>
      <Mono nowrap>{ref}</Mono>
    </Link>,
    i < last ? ', ' : ''
  ])
}

function DeprecationFlag({variable, ...rest}) {
  const dep = variableDeprecations.get(variable)
  return dep ? (
    <Text {...rest}>
      <Tooltip aria-label={`Deprecation planned in version ${dep.version} (${dep.message})`}>
        <DeprecationIcon />
      </Tooltip>
    </Text>
  ) : null
}

function DeprecationIcon(props) {
  return <Text color="red.5"><Octicon icon={Alert} /></Text>
}

export {Variables, DeprecationIcon}
