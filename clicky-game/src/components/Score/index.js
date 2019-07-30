import React from "react";
import "./style.css";

function Score(props){
  return(
    <div className={props.className + " score"} >
      <h3 className="score">{props.children}</h3>
      <div className="score-small">Your Score: {props.currentscore} </div>
      <div className="score-small">High Score: {props.highscore}</div>
      <hr></hr>
    </div>
  );
}

export default Score;


