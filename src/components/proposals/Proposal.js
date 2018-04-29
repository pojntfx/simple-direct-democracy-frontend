import React from "react";
import { Button, Icon, Card } from "semantic-ui-react";
import styled from "styled-components";

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:not(:last-child),
  & > *:not(:first-child) {
    padding: 0 2rem;
    color: black;
  }
  overflow-x: auto;
`;

const CardButton = styled(Button)`
  width: 100%;
  max-width: 150px;
  white-space: nowrap;
`;

export const Proposal = ({ children, voteCount, ...otherProps }) => (
  <Card fluid {...otherProps}>
    <Card.Content>
      <Card.Header>{children}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <CardActions>
        <CardButton basic color="green">
          <Icon name="arrow up" />
          Upvote
        </CardButton>
        <span>
          <b>{voteCount}</b>
        </span>
        <CardButton basic color="red">
          <Icon name="arrow down" />
          Downvote
        </CardButton>
      </CardActions>
    </Card.Content>
  </Card>
);
