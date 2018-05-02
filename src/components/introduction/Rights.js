import React from "react";
import { Segment, Button, List } from "semantic-ui-react";
import { IntroductionLayout } from "../../layouts/IntroductionLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Rights = () => (
  <IntroductionLayout>
    <Segment>
      <h1>Your Rights</h1>
      <p>
        For your freedom, by using this software the following rights are
        granted to you:
      </p>
      <List>
        <List.Item>
          <b>NO CENSORSHIP:</b> <br />
          There is no way to censor proposals; that is, it is impossible to
          delete or change a proposal
        </List.Item>
        <List.Item>
          <b>ANONYMITY:</b> <br />
          There is no way to identify who suggested a proposal nor who voted on
          a proposal
        </List.Item>
        <List.Item>
          <b>STUDY THE SOURCE CODE:</b> <br />
          You may look at the {"service's"} source code and check whether it
          respects your freedom
        </List.Item>
        <List.Item>
          <b>SHARE THE SOURCE CODE:</b> <br />
          You may copy the {"service's"} source code and redistribute it
        </List.Item>
        <List.Item>
          <b>MODIFY AND IMPROVE THE SOURCE CODE:</b> <br />
          You may change the {"service's"} source code and share your
          improvements with us to make it better
        </List.Item>
      </List>
      <p>
        You may take a look at the source code by clicking{" "}
        <a href="https://github.com/pojntfx">here</a>.
      </p>
    </Segment>
    <Segment>
      <h1>License</h1>
      <p>
        <b>
          In order to ensure your freedom down the line, you are bound to the
          following license:
        </b>
      </p>

      <p>Simple Direct Democracy Frontend Copyright (C) 2018 Felicitas Pojtinger</p>

      <p>
        This program is free software: you can redistribute it and/or modify it
        under the terms of the GNU Affero General Public License as published by
        the Free Software Foundation, either version 3 of the License, or (at
        your option) any later version.
      </p>

      <p>
        {" "}
        This program is distributed in the hope that it will be useful, but
        WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
        General Public License for more details.
      </p>

      <p>
        You should have received a copy of the GNU Affero General Public License
        along with this program. If not, see{" "}
        <a href="https://www.gnu.org/licenses/">
          https://www.gnu.org/licenses/
        </a>.
      </p>
      <p>
        By clicking {`"Next"`} you accept that you will respect the license.
      </p>
    </Segment>

    <NextSegment>
      <Button
        content="Back"
        icon="left arrow"
        labelPosition="left"
        as={Link}
        to="/principles"
      />
      <Button
        content="Next"
        icon="right arrow"
        labelPosition="right"
        primary
        as={Link}
        to="/duties"
      />
    </NextSegment>
  </IntroductionLayout>
);

const NextSegment = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
