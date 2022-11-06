import React from "react";
import trollImage from "../Troll Face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={trollImage} alt="pics of a troll" className="header--image" />
      <h2 className="header--title">Meme generator</h2>
      <h4 className="header--project">React Course Project 3</h4>
    </header>
  );
}
