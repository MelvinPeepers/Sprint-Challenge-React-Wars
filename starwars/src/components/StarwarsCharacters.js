import React from "react";
import Character from "./Character";

const StarwarsCharacters = props => {
  return (
    <div className="char-list">
      {props.swList.map(charList => (
        <Character charInfo={charList} key={charList.name} />
      ))}
    </div>
  );
};

export default StarwarsCharacters;
