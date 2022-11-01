import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
  const [ mode, setMode ] = useState( true )

  // // arrow syntax, callback function
  // return (
  //   <div className={mode ? "App dark" : "App Light"}> //appClass used to be here
  //     <header>
  //       <h2>Shopster</h2>
  //       <button onClick={() => setMode(!mode)}>{!mode ? "App dark" : "App Light"}</button>
  //     </header>
  //     <ShoppingList items={itemData} />
  //   </div>
  // );

  // modular attempt
  const handleClick = () => setMode(!mode)
  const buttonText = !mode ? "Dark mode" : "Light mode"

  return (
      <div className={mode ? "App dark" : "App Light"}> //appClass used to be here
        <header>
          <h2>Shopster</h2>
          <button onClick={handleClick}>{buttonText}</button>
        </header>
        <ShoppingList items={itemData} />
      </div>
    );
}

export default App;
