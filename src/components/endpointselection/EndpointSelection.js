import React, { Component } from "react";
import {
  Button,
  Form,
  Container as ContainerTemplate,
  Header,
  Segment
} from "semantic-ui-react";
import styled from "styled-components";

const Container = styled(ContainerTemplate)`
  padding: 1em 0;
`;

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
      <Container>
        <Segment>
          <Header
            as="h2"
            content="Let's get started!"
            subheader="Connect to the proposal and voting service by entering the endpoint given to you by your governing body."
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
            <Button type="submit" primary>
              Connect
            </Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}
