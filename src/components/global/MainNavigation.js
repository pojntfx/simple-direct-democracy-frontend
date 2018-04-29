import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const MainNavigation = () => (
  <Menu fluid widths={2} fixed={"top"} color="blue" inverted>
    <Menu.Item
      to="/proposals"
      name="Proposals"
      icon="slideshare"
      as={NavLink}
      activeClassName="active"
      link
      exact
    />
    <Menu.Item
      to="/analysis"
      name="Analysis"
      icon="bar chart"
      as={NavLink}
      activeClassName="active"
      link
      exact
    />
  </Menu>
);