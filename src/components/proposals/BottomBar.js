import React, { Component } from "react";
import {
  Form,
  TextArea as TextAreaTemplate,
  Menu,
  Button,
  Icon
} from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SEND_PROPOSAL = gql`
  mutation($text: String!, $author: String!) {
    createProposal(text: $text, author: $author) {
      text
    }
  }
`;

const BottomMenu = styled(Menu)`
  overflow-x: auto;
  &.ui.menu:not(.vertical) .left.item,
  &.ui.menu:not(.vertical) .left.menu {
    margin-right: 0 !important;
    padding-right: 0;
  }
`;

const TextArea = styled(TextAreaTemplate)`
  height: 41px;
`;

const CenterItem = styled(Menu.Item)`
  flex-grow: 1 !important;
  padding-right: 0 !important;
`;

const MainTextAreaWrapper = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export class BottomBar extends Component {
  state = {
    proposalText: "",
    ip: ""
  };

  onInput = ({ target: { value } }) => {
    this.setState({
      proposalText: value
    });
  };

  clearProposalText = () =>
    this.setState({
      proposalText: ""
    });

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
        const ip = ice.candidate.candidate.split(" ")[4];
        pc.onicecandidate = noop;
        setIp(ip);
      }
    };

    const setIp = ip => this.setState({ ip });
  }

  render() {
    const { onInput, clearProposalText } = this;
    const { proposalText, ip } = this.state;

    return (
      <BottomMenu fixed="bottom" borderless>
        <Menu.Item position="left">
          <Button icon as={Link} to="/tutorial/notutorial">
            <Icon name="info" />
          </Button>
        </Menu.Item>
        <CenterItem>
          <MainTextAreaWrapper>
            <TextArea
              placeholder="Type to contribute ..."
              onChange={onInput}
              value={proposalText}
              autoHeight={proposalText ? true : false}
              required
            />
            <Menu.Item position="right">
              <Mutation mutation={SEND_PROPOSAL}>
                {createProposal => (
                  <Button
                    animated="vertical"
                    color="blue"
                    onClick={() =>
                      proposalText === ""
                        ? null
                        : createProposal({
                            variables: { text: proposalText, author: ip }
                          })
                            .then(clearProposalText)
                            .catch(error => alert(error))
                    }
                    type="submit"
                  >
                    <Button.Content visible>Share</Button.Content>
                    <Button.Content hidden>
                      <Icon name="send" />
                    </Button.Content>
                  </Button>
                )}
              </Mutation>
            </Menu.Item>
          </MainTextAreaWrapper>
        </CenterItem>
      </BottomMenu>
    );
  }
}
