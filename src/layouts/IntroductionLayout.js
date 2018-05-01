import React, { Fragment } from "react";
import { Container as ContainerTemplate } from "semantic-ui-react";
import styled from "styled-components";
import { MainNavigation } from "../components/global/MainNavigation";

const Container = styled(ContainerTemplate)`
  padding-top: calc(2.85714286em + 1em);
  padding-bottom: 1em;
`;

export const IntroductionLayout = ({ children, ...otherProps }) => (
  <Fragment>
    <MainNavigation />
    <Container {...otherProps}>{children}</Container>
  </Fragment>
);
