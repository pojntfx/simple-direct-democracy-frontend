import React, { Component } from "react";
import { Button, Segment, Header, Form } from "semantic-ui-react";
import { IntroductionLayout } from "../../layouts/IntroductionLayout";

export class EndpointSelection extends Component {
  state = {
    endpoint: ""
  };

  onInputChange = ({ target: { value } }) => this.setState({ endpoint: value });

  onSubmit = event => {
    event.preventDefault();
    this.props.onEndpointSubmit(this.state.endpoint);
  };

  render() {
    const { onInputChange, onSubmit } = this;
    const { endpoint } = this.state;

    return (
      <IntroductionLayout>
        <Segment>
          <Header
            as="h2"
            content="Let's get started!"
            subheader="Connect to the proposal and voting service by entering the endpoint given to you by your governing body below."
          />
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <input
                placeholder="Endpoint"
                required
                type="text"
                name="endpoint"
                value={endpoint}
                onChange={onInputChange}
              />
            </Form.Field>
            <ConnectButton />
          </Form>
        </Segment>
      </IntroductionLayout>
    );
  }
}

const ConnectButton = () => (
  <Button fluid primary type="submit">
    Connect
  </Button>
);
