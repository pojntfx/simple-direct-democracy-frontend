import React from "react";
import { Input, Menu, Button, Icon } from "semantic-ui-react";

export const BottomBar = () => (
  <Menu fixed="bottom" borderless>
    <Menu.Item position="left">
      <Button icon>
        <Icon name="info" />
      </Button>
    </Menu.Item>

    <Menu.Item>
      <Input placeholder="Type to contribute ..." />
    </Menu.Item>

    <Menu.Item position="right">
      <Button animated="vertical" color="blue">
        <Button.Content visible>Share</Button.Content>
        <Button.Content hidden>
          <Icon name="send" />
        </Button.Content>
      </Button>
    </Menu.Item>
  </Menu>
);
