import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = ({ children, visible, ...otherProps }) => (
  <MainContainer>
    <SideBarWrapper {...otherProps}>
      <Sidebar
        as={Menu}
        animation="scale down"
        width="thin"
        direction="right"
        visible={visible}
        icon="labeled"
        vertical
      >
        <Menu.Item
          name="bar-chart"
          as={NavLink}
          to="/analytics/bar-chart"
          exact
          activeClassName="active"
        >
          <Icon name="bar chart" />
          Bar Chart
        </Menu.Item>
        <Menu.Item
          name="pie-chart"
          as={NavLink}
          to="/analytics/pie-chart"
          exact
          activeClassName="active"
        >
          <Icon name="pie chart" />
          Pie Chart
        </Menu.Item>
        <Menu.Item
          name="mesh-chart"
          as={NavLink}
          to="/analytics/mesh-chart"
          exact
          activeClassName="active"
        >
          <Icon name="map" />
          Mesh Chart
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>{children}</Sidebar.Pusher>
    </SideBarWrapper>
  </MainContainer>
);

const MainContainer = styled.div`
  padding-top: 2.85714286em;
`;

const SideBarWrapper = styled(Sidebar.Pushable)`
  /* margin-top: 2.85714286em; */
  min-height: calc(100vh - 2.85714286em);
  .ui.scale.down.right.sidebar ~ .pusher {
    transform-origin: 25% 5em;
  }
`;
