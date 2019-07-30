import React, { Component } from "react";
import ComicCard from "./components/ComicCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score/index.js";
import Title from "./components/Title";
import comics from "./comics.json";

class App extends Component {
  // Setting this.state.comics to the comics json array
  state = {
    comics,
    highscore: 0,
    currentscore: 0,
    guessedCards: [],
    gameOver: false
  };

  updateScore = () => {
    let tempHighScore = this.state.highscore;
    let tempScore = this.state.currentscore+1;
    if (tempScore >= tempHighScore){
      tempHighScore = tempScore
      this.setState({
        highscore: tempHighScore,
        currentscore: tempScore
      });
  } else {
    this.setState({
      currentscore: tempScore
    })
  } 
}

  gameOver = () => {
    console.log("you've already guessed that one");
    this.setState({
      gameOver: true,
      currentscore: 0,
      guessedCards: []
    })
  };

  handleGuess = (id) => {
    this.randomize();
    if (this.state.gameOver === true){
      this.setState({
        gameOver: false
      })
    }
    
    let tempArray = this.state.guessedCards
    if (tempArray.includes(id)){
      this.gameOver();
    } else {
      this.updateScore();
      tempArray.push(id);
      this.setState({
        guessedCards: tempArray
      })
      console.log(this.state.guessedCards)
    }
  }

  randomize = () => {
    let oldArray = this.state.comics
    let newArray = []
    let randomIndex
    console.log("in randomize: " + oldArray[0].name);
    // Randomly shuffle the array
    while (oldArray.length > 0){
      randomIndex = Math.floor(Math.random() * oldArray.length)
      newArray.push(oldArray[randomIndex]);
      oldArray.splice(randomIndex, 1)
      console.log(`The New Array is ${newArray}, the Index is ${randomIndex} and the Old Array is: ${oldArray}`)
    }
    // Set the new array to the reshuffled array
    this.setState({
      comics: newArray
    })
  }

  // Create a ComicCard component for each item in comics state object
  render() {
    return (
      <div className="mainDiv">
        <Title>Superhero Memory Game</Title>
        { 
          (!this.state.gameOver) ? 
          <Score className="playing" currentscore={this.state.currentscore} highscore={this.state.highscore}>Keep Guessing!</Score>
          :
          <Score className="gameOver" currentscore={this.state.currentscore} highscore={this.state.highscore}>You Already Guessed That Card. Bummer! Click a card to play again.</Score>
        }
        <Wrapper>
        {this.state.comics.map(comic => (
          <ComicCard
            id={comic.id}
            key={comic.id}
            name={comic.name}
            image={comic.image}
            handleGuess={this.handleGuess}     
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
