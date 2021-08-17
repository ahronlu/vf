import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Nav = ({ setQuery, showSearch }) => {
  return (
    <Menu className="green">
      <Menu.Item name="Vegan Friendly" />
      {showSearch ? (
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              icon="search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              placeholder="Search..."
            />
          </Menu.Item>
        </Menu.Menu>
      ) : null}
    </Menu>
  );
};

export default Nav;
