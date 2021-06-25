import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// new to run - npm run server - in the terminal
// new to run - npm start - in the terminal

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushi] = useState([])
  const [remainingMoney, setRemainingMoney] = useState(100)
  const [platesUsed, setPlatesUsed] = useState([])
  console.log(platesUsed)
 
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      //console.log("data",data)
      setSushi(data)})
  }, [])

  function fetchForMoreSushi() { //second fetch for more sushi
    
    fetch(API)
    .then(response => response.json())
    .then(data => setSushi(data))
  }

  function howMuchMoneyWasSpent(e) { //subracting the remaining money with the passed down money clicked
    setRemainingMoney(remainingMoney - e)
    console.log(remainingMoney)
    let newPlateEaten = platesUsed + 1 // adds platesused plus 1 on the table
    setPlatesUsed([...newPlateEaten]) // merges newPlateEaten plus platesUsed

    
  }

  // if (remainingMoney <= 0) {
  //   setShowSushiContainer((showSushiContainer) => !showSushiContainer)
  // }


  return (
    <div className="app">

      <SushiContainer
        sushis={sushis}
        fetchForMoreSushi={fetchForMoreSushi}
        howMuchMoneyWasSpent={howMuchMoneyWasSpent}
        remainingMoney={remainingMoney}
      />
      <Table plates={platesUsed} remainingMoney={remainingMoney} />
    </div>
  );
}

export default App;
