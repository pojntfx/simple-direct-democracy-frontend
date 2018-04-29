import React, { Component } from "react";
import {
  Form,
  TextArea as TextAreaTemplate,
  Menu,
  Button,
  Icon
} from "semantic-ui-react";
import styled from "styled-components";

const BottomMenu = styled(Menu)`
  overflow-x: auto;
  &.ui.menu:not(.vertical) .left.item,
  &.ui.menu:not(.vertical) .left.menu {
    margin-right: 0 !important;
    padding-right: 0;
  }
  &.ui.menu:not(.vertical) .right.item,
  &.ui.menu:not(.vertical) .right.menu {
    margin-left: 0 !important;
    padding-left: 0;
  }
`;

const TextArea = styled(TextAreaTemplate)`
  height: 41px;
`;

const CenterItem = styled(Menu.Item)`
  flex-grow: 1 !important;
`;

const MainTextAreaWrapper = styled(Form)`
  width: 100%;
`;

export class BottomBar extends Component {
  state = {
    proposalText: undefined
  };

  onInput = ({ target: { value } }) => {
    this.setState({
      proposalText: value
    });
  };

  render() {
    const { onInput } = this;
    const { proposalText } = this.state;

    return (
      <BottomMenu fixed="bottom" borderless>
        <Menu.Item position="left">
          <Button icon>
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
            />
          </MainTextAreaWrapper>
          {/* <Input /> */}
        </CenterItem>

        <Menu.Item position="right">
          <Button animated="vertical" color="blue">
            <Button.Content visible>Share</Button.Content>
            <Button.Content hidden>
              <Icon name="send" />
            </Button.Content>
          </Button>
        </Menu.Item>
      </BottomMenu>
    );
  }
}
