import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { IntroductionLayout } from "../../layouts/IntroductionLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Tutorial = ({
  match: {
    params: { istutorial }
  }
}) => (
  <IntroductionLayout>
    <Segment>
      <h1>A quick introduction</h1>
      <p>
        After finishing the setup in the next step, the following view will
        greet you:
      </p>
    </Segment>
    <Segment>
      <h2>Proposals</h2>
      <Img src="/proposals-navigation.png" alt="Proposal page main view" />
      <p>
        In this top navigation you may choose whether you want to suggest or
        vote on a proposal or analyze the current situation.
      </p>
      <Img src="/proposals-card.png" alt="Proposal card view" />
      <p>
        Using a {"proposal's card"} like the one you can see above you can vote
        on existing proposals. The vote count does not have to reflect the
        actual number of votes, but the ratio does match. By pressing{" "}
        {`"Upvote"`} you may vote for a proposal, by pressing {`"Downvote"`} you
        may vote against a proposal. A negative amount of votes is possible.
      </p>
      <Img src="/proposals-input.png" alt="Proposal input view" />
      <p>
        By entering your proposal into the input you can see above and
        tapping/clicking {`"Send"`} you can suggest your own proposal. Remember
        the guidelines {"you've"} accepted in the last step and please act
        accordingly as all proposals will be public and permanent. If you wish
        to see this introduction again, you can press the info icon in the
        bottom left.
      </p>
    </Segment>
    <Segment>
      <h2>Analytics</h2>
      <Img
        src="/analytics-navigation-and-controls.png"
        alt="Analytics page main controls"
      />
      <p>
        After navigating to the analytics tab, you may zoom in and out of a
        graph by using the controls you can see above.
      </p>
      <Img
        src="/analytics-graph-and-drawer-control.png"
        alt="Analytics graph and controls view"
      />
      <p>
        By tapping/clicking on a {"graph's"} bar, you may look at more info on
        the particular piece of data. Furthermore, you may choose different
        styles of graphs by clicking the hamburger menu button at the bottom
        right.
      </p>
      <Img
        src="/analytics-drawer-only-drawer.png"
        alt="Analytics drawer view"
      />
      <p>
        You may choose a different style here, but using the default bar chart
        makes the most sense when many votes have been cast.
      </p>
    </Segment>
    <NextSegment>
      {istutorial === "notutorial" ? (
        <Button
          content="Back"
          icon="left arrow"
          labelPosition="left"
          as={Link}
          to="/"
        />
      ) : (
        [
          <Button
            content="Back"
            icon="left arrow"
            labelPosition="left"
            as={Link}
            to="/duties"
            key="1"
          />,
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            primary
            as={Link}
            to="/setup-complete"
            key="2"
          />
        ]
      )}
    </NextSegment>
  </IntroductionLayout>
);

const Img = styled.img`
  width: 100%;
  max-width: 411px;
`;

const NextSegment = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
