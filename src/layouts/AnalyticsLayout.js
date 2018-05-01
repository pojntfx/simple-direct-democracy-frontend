import React, { Fragment } from "react";
import { Container as ContainerTemplate } from "semantic-ui-react";
import styled from "styled-components";
import { MainNavigation } from "../components/global/MainNavigation";
import { SideBar } from "../components/analytics/SideBar";

const Container = styled(ContainerTemplate)`
  padding-top: 1em;
  padding-bottom: calc(2.85714286em + 1em + 0.9em);
`;

export const AnalyticsLayout = ({ children, ...otherProps }) => (
  <Fragment>
    <MainNavigation />
    <SideBar visible={true}>
      <Container {...otherProps}>{children}</Container>
    </SideBar>
  </Fragment>
);
