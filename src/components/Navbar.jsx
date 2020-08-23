import React from "react";
import logo from "../assets/imdb.png";
import { ImSearch } from "react-icons/im";

export default function Navbar(props) {
  const changeData = (e) => {
    props.setFirstData(e.target.value);
  };

  return (
    <>
      <div className="nav-container">
        <img alt="logo" src={logo} height="80%" width="100px" />
        <h1>MoviesDB Search</h1>
      </div>
      <div className="container-input">
        <input
          placeholder="Search for a movie..."
          className="input-search"
          onChange={changeData}
          value={props.value}
        />
        <ImSearch className="icon" />
      </div>
    </>
  );
}
