import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/*{code here}*/}
      <NavLink to="/movies" >Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/" exact activeStyle={{ background: "red" }}>
        Home
      </NavLink>
    </div>
  );
}

export default NavBar;
