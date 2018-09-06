import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <badge className="badge badge-pill badge-secondary">
          {totalCounters}
        </badge>
      </a>
    </nav>
  );
};

export default NavBar;
