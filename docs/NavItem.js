import {theme, Link} from '@primer/components'
import styled from 'styled-components'

const NavItem = styled(Link)`
  color: ${theme.colors.blue[2]};
  display: block;
  padding: 0 ${theme.space[3]}px;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 215px;
  &:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.blue[4]};
    text-decoration: none;
  }
`

export default NavItem
