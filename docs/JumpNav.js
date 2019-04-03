import React from 'react'
import {Link} from '@primer/components'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const JumpNav = () => {
  return (
    <>
      <Link color="blue.2" mx={3} href="https://primer.style/news">
        What’s New
      </Link>
      <NavDropdown title="Design">
        <NavItem href="https://primer.style/design">Interface Guidelines</NavItem>
        <NavItem href="https://octicons.github.com/">Octicons</NavItem>
        <NavItem href="https://primer.style/css/tools/prototyping">Prototyping</NavItem>
      </NavDropdown>
      <NavDropdown title="Development" direction="sw">
        <NavItem href="https://primer.style/css">Primer CSS</NavItem>
        <NavItem href="https://primer.style/components">Primer Components</NavItem>
      </NavDropdown>
      <Link color="blue.2" mr={3} href="https://primer.style/team">
        Team
      </Link>
    </>
  )
}

export default JumpNav
