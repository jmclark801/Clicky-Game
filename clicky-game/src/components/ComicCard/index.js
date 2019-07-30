import React from "react";
import "./style.css";


function ComicCard(props) {
  return (
    <div onClick={() => props.handleGuess(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComicCard;
