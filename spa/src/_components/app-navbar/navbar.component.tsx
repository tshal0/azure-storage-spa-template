import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Alignment, AnchorButton, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";


interface AppRouteProps {
}

interface AppProps {}

export const NavBar = React.memo(function (props: AppProps) {
    const dispatch = useDispatch();

    return (
        <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>SPA Template</NavbarHeading>
          <NavbarDivider />
          <AnchorButton
            href="http://blueprintjs.com/docs"
            text="Docs"
            target="_blank"
            minimal
            rightIcon="share"
          />
          <AnchorButton
            href="https://www.wowhead.com/raid-composition"
            text="WowHead Raid Composition"
            target="_blank"
            minimal
            rightIcon="code"
          />
        </NavbarGroup>
      </Navbar>
    );
});
