import React from "react";
import { Segment, Button, List } from "semantic-ui-react";
import { IntroductionLayout } from "../../layouts/IntroductionLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Duties = () => (
  <IntroductionLayout>
    <Segment>
      <h1>Your Duties</h1>
      <p>
        Since we do not restrict you in any way, we rely on your respect and
        gratitude towards others. By clicking {`"Next"`} you are expected to
        follow the following guidelines:
      </p>
      <List>
        <List.Item>
          <b>BE RESPECTFUL AND CONSIDERATE:</b> <br />
          Disagreement is no excuse for poor behaviour or personal attacks.
          Remember that a community where people feel uncomfortable is not a
          productive one.
        </List.Item>
        <List.Item>
          <b>BE PATIENT AND GENEROUS:</b> <br />
          If someone asks for help it is because they need it. Avoid aggressive
          or vague responses such as {`"RTFM"`}.
        </List.Item>
        <List.Item>
          <b>ASSUME PEOPLE MEAN WELL:</b> <br />
          Remember that decisions are often a difficult choice between competing
          priorities. If you disagree, please do so politely. If something seems
          outrageous, check that you did not misinterpret it. Ask for
          clarification, but do not assume the worst.
        </List.Item>
        <List.Item>
          <b>TRY TO BE CONSISE:</b> <br />
          Avoid repeating what has been said already. Making a conversation
          larger makes it difficult to follow, and people often feel personally
          attacked if they receive multiple messages telling them the same
          thing.
        </List.Item>
      </List>
      <p>
        These guidelines have been adapted from the{" "}
        <a href="https://wiki.gnome.org/action/show/Foundation/CodeOfConduct?action=show&redirect=CodeOfConduct">
          GNOME Code Of Conduct
        </a>.
      </p>
    </Segment>

    <NextSegment>
      <Button
        content="Back"
        icon="left arrow"
        labelPosition="left"
        as={Link}
        to="/rights"
      />
      <Button
        content="Next"
        icon="right arrow"
        labelPosition="right"
        primary
        as={Link}
        to="/tutorial"
      />
    </NextSegment>
  </IntroductionLayout>
);

const NextSegment = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
