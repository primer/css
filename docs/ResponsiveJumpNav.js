import React from 'react'
import {Link as PrimerLink, BorderBox, Box} from '@primer/components'
import NavDropdown from './NavDropdown'
import Link from './Link'

const DropdownLink = ({href, children}) => (
  <Box mt={2}>
    <Link fontSize={1} href={href}>
      {children}
    </Link>
  </Box>
)

const ResponsiveJumpNav = () => {
  return (
    <BorderBox p={5} bg="gray.1" border={0} borderBottom={1} borderColor="gray.2" borderRadius={0} width="100%">
      <BorderBox py={3} borderColor="gray.2" borderTop={0} borderLeft={0} borderRight={0} borderBottom={1}>
        <PrimerLink color="black" fontWeight="bold" my={2} href="https://primer.style/news">
          What’s New
        </PrimerLink>
      </BorderBox>
      <BorderBox py={3} borderColor="gray.2" borderTop={0} borderLeft={0} borderRight={0} borderBottom={1}>
        <PrimerLink color="black" fontWeight="bold" my={2} href="https://primer.style/team">
          Team
        </PrimerLink>
      </BorderBox>
      <BorderBox py={3} borderColor="gray.2" borderTop={0} borderLeft={0} borderRight={0} borderBottom={1}>
        <NavDropdown.Responsive color="black" title="Design">
          <DropdownLink href="https://primer.style/design">Interface Guidelines</DropdownLink>
          <DropdownLink href="https://octicons.github.com/">Icons</DropdownLink>
          <DropdownLink href="https://github.com/primer/presentations">Presentations</DropdownLink>
        </NavDropdown.Responsive>
      </BorderBox>
      <Box pt={3}>
        <NavDropdown.Responsive color="black" title="Development">
          <DropdownLink href="https://primer.style/css">Primer CSS</DropdownLink>
          <DropdownLink href="https://primer.style/components">Primer Components</DropdownLink>
          <DropdownLink href="https://github.com/primer/deploy">Deploy</DropdownLink>
          <DropdownLink href="https://primer.style/css/tools/prototyping">Prototyping</DropdownLink>
        </NavDropdown.Responsive>
      </Box>
    </BorderBox>
  )
}

export default ResponsiveJumpNav
