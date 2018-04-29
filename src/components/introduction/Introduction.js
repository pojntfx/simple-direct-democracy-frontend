import React from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Segment } from "semantic-ui-react";

export const Introduction = () => (
  <DefaultLayout>
    <Segment>
      <h1>Getting started</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        quia fuga facilis, perspiciatis vitae reiciendis.
      </p>
    </Segment>
    <Segment>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        quaerat vitae! Magni officiis quia in, nulla inventore laboriosam
        quisquam tenetur quibusdam sit velit eaque ad quas facere sequi nisi
        quasi! Illum deleniti odit impedit.
      </p>
    </Segment>
    <Segment>
      <h1>License</h1>
      <p>Simple Direct Democracy Frontend Copyright (C) 2018 Felicitas Pojtinger</p>
      <p>
        This program is free software: you can redistribute it and/or modify it
        under the terms of the GNU Affero General Public License as published by
        the Free Software Foundation, either version 3 of the License, or (at
        your option) any later version. This program is distributed in the hope
        that it will be useful, but WITHOUT ANY WARRANTY; without even the
        implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
        See the GNU Affero General Public License for more details. You should
        have received a copy of the GNU Affero General Public License along with
        this program. If not, see{" "}
        <a href="https://www.gnu.org/licenses/">
          https://www.gnu.org/licenses/
        </a>.
      </p>
    </Segment>
  </DefaultLayout>
);
