import React, { Fragment, Component } from "react";
import { Container as ContainerTemplate, Button } from "semantic-ui-react";
import styled from "styled-components";
import { MainNavigation } from "../components/global/MainNavigation";
import { SideBar } from "../components/analytics/SideBar";

const Container = styled(ContainerTemplate)`
  padding-top: 1em;
  padding-bottom: calc(2.85714286em + 1em + 0.9em);
`;

const SideBarToggleButton = styled(Button)`
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 100; /* Be beneath the navbar, but above the menu on the side */
`;

export class AnalyticsLayout extends Component {
  state = {
    sideBarIsOpen: false
  };

  toggleSideBar = () =>
    this.setState({ sideBarIsOpen: !this.state.sideBarIsOpen });

  render() {
    const { toggleSideBar } = this;
    const { sideBarIsOpen } = this.state;
    const { children, ...otherProps } = this.props;
    return (
      <Fragment>
        <MainNavigation />
        <SideBarToggleButton icon="sidebar" onClick={toggleSideBar} />
        <SideBar visible={sideBarIsOpen}>
          <Container {...otherProps}>{children}</Container>
        </SideBar>
      </Fragment>
    );
  }
}
