import React, { useState } from "react";
import { Menu, Input } from "semantic-ui-react";

const Nav = ({ setQuery }) => {
  return (
    <Menu className="green">
      <Menu.Item name="Vegan Friendly" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            placeholder="Search..."
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
