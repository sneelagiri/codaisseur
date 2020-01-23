import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css";
import AddPlayer from "./AddPlayer";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
  };

  incrementScoreOfPlayer = id => {
    this.setState({
      players: this.state.players.map(player =>
        player.id === id ? { ...player, score: player.score + 1 } : player
      )
    });
  };

  addPlayer = name => {
    const player = {
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    };
    this.setState({
      players: this.state.players.concat(player)
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {[...this.state.players]
            .sort((a, b) => b.score - a.score)
            .map(player => (
              <Player
                {...player}
                key={player.id}
                incrementScore={this.incrementScoreOfPlayer}
              />
            ))}
          <AddPlayer addPlayer={this.addPlayer} />
        </ul>
      </div>
    );
  }
}
