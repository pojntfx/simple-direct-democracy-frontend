import React from "react";
import { Button, Icon, Card } from "semantic-ui-react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPVOTE_PROPOSAL = gql`
  mutation($id: String!) {
    upvoteProposal(id: $id) {
      votes
    }
  }
`;

const DOWNVOTE_PROPOSAL = gql`
  mutation($id: String!) {
    downvoteProposal(id: $id) {
      votes
    }
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:not(:last-child),
  & > *:not(:first-child) {
    padding: 0 2rem;
    color: black;
    font-size: 20px;
  }
  overflow-x: auto;
`;

const CardButton = styled(Button)`
  width: 100%;
  max-width: 150px;
  white-space: nowrap;
`;

export const Proposal = ({ children, votes, id, ...otherProps }) => (
  <Card fluid {...otherProps}>
    <Card.Content>
      <Card.Header>{children}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <CardActions>
        <Mutation mutation={UPVOTE_PROPOSAL}>
          {upvoteProposal => (
            <CardButton
              basic
              color="green"
              onClick={() => upvoteProposal({ variables: { id } })}
            >
              <Icon name="arrow up" />
              Upvote
            </CardButton>
          )}
        </Mutation>
        <span>
          <b>{votes}</b>
        </span>

        <Mutation mutation={DOWNVOTE_PROPOSAL}>
          {downvoteProposal => (
            <CardButton
              basic
              color="red"
              onClick={() => downvoteProposal({ variables: { id } })}
            >
              <Icon name="arrow down" />
              Downvote
            </CardButton>
          )}
        </Mutation>
      </CardActions>
    </Card.Content>
  </Card>
);
