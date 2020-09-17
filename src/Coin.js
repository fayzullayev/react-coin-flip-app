import React, { Component,useMemo } from "react";
import "./Coin.css";
import one from "./1.jpg";
import two from "./2.jpg";

class Coin extends Component {
  static defaultProps = {
    coin: null,
  };
  render() {
    let coin = {
      1: one,
      2: two,
    };

    return (
      this.props.coin ? (
        <img
          className={`Coin ${this.props.flipping ? "flipping" : null}`}
          src={coin[this.props.coin]}
        />
      ):<div class="Coin-placeholder"></div>
    );
  }
}

export default Coin;
