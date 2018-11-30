import React from 'react';
import {withRouter} from 'next/router';
import {default as NextLink} from 'next/link';
import {Text, BorderBox, Box, Link, Flex, Relative} from '@primer/components';

const NavLink = withRouter(({href, router, ...rest}) => (
  <NextLink href={href}>
    <Link
      color="gray.9"
      href={href}
      m={0}
      mb={4}
      fontWeight={router.pathname === href ? 'bold' : null}
      {...rest}
    />
  </NextLink>
));

const SideNav = props => (
  <Relative is="nav">
    <BorderBox
      {...props}
      width={['100%', '100%', 256, 256]}
      height="100%"
      bg="gray.0"
      display="inline-block"
      borderTop={[1, 1, 0, 0]}
      borderRight={1}
      borderColor="gray.2"
      id="sidenav">
      <BorderBox
        border="none"
        borderBottom={1}
        borderRadius={0}
        borderColor="gray.2"
        bg="gray.0">
        <Flex flexDirection="column" alignItems="start" p={5}>
          <NavLink href="/css/support/">Support</NavLink>
          <NavLink href="/css/utilities/">Utilities</NavLink>
          <NavLink href="/css/objects/">Objects</NavLink>
          <NavLink href="/css/components/">Components</NavLink>
        </Flex>
      </BorderBox>
    </BorderBox>
  </Relative>
);

export default withRouter(SideNav);
