import React from "react";

function MoreButton( {getMoreSushi} ) {

  function moreSushiButtonClicked() {
    getMoreSushi()
  }

  return <button onClick={moreSushiButtonClicked}>More sushi!</button>;
}

export default MoreButton;
