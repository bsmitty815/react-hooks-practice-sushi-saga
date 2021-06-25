import React, { useState } from "react";

function Sushi( { sushi, howMuchMoneyWasSpent, remainingMoney } ) {
 
  const { img_url, name, price } = sushi
  const [showSushi, setShowSushi] = useState(false) //sets the show sushi image
  //console.log(sushi)

  function sushiPlateClicked() {
    console.log(remainingMoney)
     // hides the sushi image
     if (sushi.price < remainingMoney) {
      // running an if else so that if sushi.price is less then the remaining money that they have
      // you cant remove the sushi fromt he plate
      setShowSushi((showSushi) => !showSushi)
      howMuchMoneyWasSpent(sushi.price)

    }
    
    
  }

  
  

  return (
    <div className="sushi">
      <div className="plate" onClick={sushiPlateClicked}>
        {/* Tell me if this sushi has been eaten! */}
        {showSushi ? null : (
          <img
            id={price}
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;