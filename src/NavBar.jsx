import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./NavBar.css";


/** Navigation bar component for dogFinder site.
 *
 * Props:
 * - dogNames: array like [dogName...]
 *
 * State: none
 *
 * App -> NavBar
 */

function NavBar({ dogNames }) {
  return (
    <nav className="NavBar">
      <NavLink
      to="/dogs" end>Home</NavLink>
      {
        dogNames.map(name =>
          <NavLink
            key={uuid()}
            to={`/dogs/${name.toLowerCase()}`}>{name}</NavLink>
        )
      }
    </nav>
  );
}

export default NavBar;