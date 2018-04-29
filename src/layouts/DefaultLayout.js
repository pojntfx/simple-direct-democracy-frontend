import React, { Fragment } from "react";
import { Container as ContainerTemplate } from "semantic-ui-react";
import { MainNavigation } from "../components/global/MainNavigation";
import styled from "styled-components";

const Container = styled(ContainerTemplate)`
  padding-top: calc(2.85714286em + 1em);
`;

export const DefaultLayout = ({ children, ...otherProps }) => (
  <Fragment>
    <MainNavigation />
    <Container {...otherProps}>{children}</Container>
  </Fragment>
);
