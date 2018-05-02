import React, { Fragment } from "react";
import { Container as ContainerTemplate } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled(ContainerTemplate)`
  padding: 1em 0;
`;

export const IntroductionLayout = ({ children, ...otherProps }) => (
  <Fragment>
    <Container {...otherProps}>{children}</Container>
  </Fragment>
);
