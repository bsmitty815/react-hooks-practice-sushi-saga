import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"



function SushiContainer( {sushis, fetchForMoreSushi, howMuchMoneyWasSpent, remainingMoney} ) {
  const [sushiCount, setSushiCount] = useState(0) //this will keep track of the sushi count
  
  

  const sushiElements = () => { //you can set this function as const and then call the
    return sushis.slice(sushiCount, sushiCount+4).map((sushi) => { //function below to send it to the next component
      return <Sushi key={sushi.id} sushi={sushi} remainingMoney={remainingMoney} howMuchMoneyWasSpent={howMuchMoneyWasSpent} /> // i used slice to get four elemnts at a time
    })
  }
  

  function getMoreSushi () {
    setSushiCount(sushiCount + 4) //increases sushi count by 4 then
    fetchForMoreSushi()       //call a callback function for the new fetch
  }

  return (
    <div className="belt">
      {sushiElements()}
      <MoreButton getMoreSushi={getMoreSushi} />
    </div>
  );
}

export default SushiContainer;
