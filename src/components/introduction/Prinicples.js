import React from "react";
import { Segment, Button, List } from "semantic-ui-react";
import { IntroductionLayout } from "../../layouts/IntroductionLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Prinicples = () => (
  <IntroductionLayout>
    <Segment>
      <h1>Principles</h1>
      <p>
        This service aims to provide you with a simple direct democracy; as
        such, it enables you to:
      </p>
      <List>
        <List.Item>
          <b>VOTE:</b> <br />
          You may upvote or downvote existing proposals
        </List.Item>
        <List.Item>
          <b>SUGGEST:</b> <br />
          You may share your own proposals and let others vote on them
        </List.Item>
        <List.Item>
          <b>ANALYZE:</b> <br />
          You may analyze the current vote structure and get a better
          understanding of the current situation
        </List.Item>
      </List>
      <p>
        Amongst other things, how to do these actions will be explained in the
        following.
      </p>
    </Segment>

    <NextSegment>
      <Button
        content="Next"
        icon="right arrow"
        labelPosition="right"
        primary
        as={Link}
        to="/rights"
      />
    </NextSegment>
  </IntroductionLayout>
);

const NextSegment = styled(Segment)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
