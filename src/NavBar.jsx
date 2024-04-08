import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


/** Navigation for dogFinder site.
 *
 * Props:
 * - dogNames: array like [dogName...]
 *
 * State: none
 *
 * App -> NavBar
 */

function NavBar({dogNames}) {
  return (
    <nav className="NavBar">
      <Link to="/dogs"> Home </Link>
        {
            dogNames.map(d =>
                <Link key={d} to={`/dogs/${d}`}> {d} </Link>
            )
        }
    </nav>
  );
}

export default NavBar;