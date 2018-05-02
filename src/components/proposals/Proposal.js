import React, { Component } from "react";
import { Button, Icon, Card } from "semantic-ui-react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPVOTE_PROPOSAL = gql`
  mutation($id: String!, $author: String!) {
    upvoteProposal(id: $id, author: $author) {
      votes
    }
  }
`;

const DOWNVOTE_PROPOSAL = gql`
  mutation($id: String!, $author: String!) {
    downvoteProposal(id: $id, author: $author) {
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

export class Proposal extends Component {
  state = {
    ip: ""
  };

  componentDidMount() {
    window.RTCPeerConnection = window.RTCPeerConnection;
    var pc = new RTCPeerConnection({
        iceServers: []
      }),
      noop = function() {};
    pc.createDataChannel("");
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);
    pc.onicecandidate = ice => {
      if (ice && ice.candidate && ice.candidate.candidate) {
        var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(
          ice.candidate.candidate
        )[1];
        pc.onicecandidate = noop;
        setIp(myIP);
      }
    };

    const setIp = ip => this.setState({ ip });
  }

  render() {
    const { children, votes, id, ...otherProps } = this.props;
    const { ip } = this.state;
    return (
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
                  onClick={() =>
                    upvoteProposal({ variables: { id, author: ip } }).catch(
                      error => alert(error)
                    )
                  }
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
                  onClick={() =>
                    downvoteProposal({ variables: { id, author: ip } }).catch(
                      error => alert(error)
                    )
                  }
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
  }
}
