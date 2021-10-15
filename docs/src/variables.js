import React from 'react'
import {Flex, Link, Text, Tooltip, Flash} from '@primer/components'
import {AlertIcon} from '@primer/octicons-react'
import themeGet from '@styled-system/theme-get'
import DoctocatTable from '@primer/gatsby-theme-doctocat/src/components/table'
import styled from 'styled-components'

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

function useVariables() {
  const deprecations = useDeprecations()

  return React.useMemo(() => {
    let variablesByFile = new Map()

    try {
      const variables = require('../dist/variables.json')

      for (const name of Object.keys(variables)) {
        if (name.endsWith('-font')) {
          delete variables[name]
        }
      }

      variablesByFile = Object.entries(variables).reduce((map, [name, variable]) => {
        const {
          source: {path}
        } = variable

        variable.name = name
        variable.deprecated = deprecations.variables.hasOwnProperty(name)

        if (map.has(path)) {
          map.get(path).push(variable)
        } else {
          map.set(path, [variable])
        }

        return map
      }, variablesByFile)

      for (const variables of variablesByFile.values()) {
        variables.sort((a, b) => {
          return a.deprecated - b.deprecated || a.source.line - b.source.line
        })
      }
    } catch (err) {
      // do nothing
    }

    return variablesByFile
  }, [])
}

function useDeprecations() {
  return React.useMemo(() => {
    try {
      const deprecations = require('../dist/deprecations.json')
      return deprecations
    } catch (err) {
      return {}
    }
  }, [])
}

function Variables({children, ...props}) {
  const variablesByFile = useVariables()

  if (variablesByFile.size === 0) {
    return (
      <>
        <h2>No data available</h2>
        {__DEV__ && (
          <Flash variant="danger">
            This probably means that the root project has not been built; run `npm run dist` and restart your
            development server.
          </Flash>
        )}
      </>
    )
  }

  return (
    <>
      {children}
      <VariablesDetails variablesByFile={variablesByFile} {...props} />
    </>
  )
}

function VariablesDetails({variablesByFile, ...props}) {
  return Array.from(variablesByFile.entries()).map(([path, variables]) => (
    <React.Fragment key={path}>
      <h3>
        Defined in <Link href={`https://github.com/primer/css/tree/main/${path}`}>{path}</Link>
      </h3>
      <Table {...props}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {variables.map(({name, computed, source, refs}) => (
            <tr id={name} key={name}>
              <th scope="row">
                <Flex justifyContent="space-between">
                  <Link href={`#${name}`} color="fg.muted" mr={2}>
                    #
                  </Link>
                  <Flex flex="1">
                    <Link href={`https://github.com/primer/css/tree/main/${source.path}#L${source.line}`}>
                      <Mono nowrap>{name}</Mono>
                    </Link>
                  </Flex>
                  <Flex justifySelf="end">
                    <DeprecationFlag variable={name} ml={2} />
                  </Flex>
                </Flex>
              </th>
              <td>
                <Swatch value={computed} mr={2} />
                <Mono nowrap>{computed}</Mono>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
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
  border: 1px solid ${themeGet('colors.border.default')};
  border-radius: ${themeGet('radii.1')}px;
  margin-bottom: -2px;
`

Swatch.defaultProps = {
  size: '1em'
}

function DeprecationFlag({variable, ...rest}) {
  const deprecations = useDeprecations()

  const dep = deprecations.variables[variable]
  return dep ? (
    <Text {...rest}>
      <Tooltip aria-label={`Deprecation planned in version ${dep.version} (${dep.message})`}>
        <DeprecationIcon />
      </Tooltip>
    </Text>
  ) : null
}

function DeprecationIcon() {
  return (
    <Text color="danger.fg">
      <AlertIcon />
    </Text>
  )
}

export {Variables, DeprecationIcon}
