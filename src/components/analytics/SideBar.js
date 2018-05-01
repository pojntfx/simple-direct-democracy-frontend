import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import styled from "styled-components";

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
        <Menu.Item name="grid">
          <Icon name="grid layout" />
          Grid
        </Menu.Item>
        <Menu.Item name="pie-chart">
          <Icon name="pie chart" />
          Pie Chart
        </Menu.Item>
        <Menu.Item name="bar-chart">
          <Icon name="bar chart" />
          Bar Chart
        </Menu.Item>
        <Menu.Item name="bubble-chart">
          <Icon name="circle outline" />
          Bubble Chart
        </Menu.Item>
        <Menu.Item name="arc-chart">
          <Icon name="circle notched" />
          Arc Chart
        </Menu.Item>
        <Menu.Item name="radar-chart">
          <Icon name="map" />
          Radar Chart
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
