import React from "react";

import { useRouteMatch, Link } from "react-router-dom";

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const active = match ? "active" : "";

  return (
    <li className={active}>
      {match && ""}
      <Link to={to}>{label}</Link>
    </li>
  );
};

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product List",
    to: "/product-list",
    exact: false,
  },
];

export default class Menu extends React.Component {
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((x, index) => {
        return (
          <OldSchoolMenuLink
            key={index}
            label={x.name}
            to={x.to}
            activeOnlyWhenExact={x.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </nav>
    );
  }
}
