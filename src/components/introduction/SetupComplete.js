import React from "react";
import { Segment, Button, Icon, Header } from "semantic-ui-react";
import { IntroductionLayout } from "../../layouts/IntroductionLayout";
import { Link } from "react-router-dom";

export const SetupComplete = () => (
  <IntroductionLayout>
    <Segment>
      <Header as="h2" icon textAlign="center">
        <Icon name="check circle" circular />
        <Header.Content>{"You're"} all set!</Header.Content>
      </Header>
      <p>
        You may now start contributing to this direct democracy. Have a nice
        time!
      </p>
      <FinishButton />
    </Segment>
  </IntroductionLayout>
);

const registerFinishedState = () =>
  localStorage.setItem("hasFinishedIntroduction", "true");

const FinishButton = () => (
  <Button
    primary
    fluid
    content="Contribute"
    icon="right arrow"
    labelPosition="right"
    as={Link}
    to="/"
    onClick={registerFinishedState}
  />
);
