import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard.js";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Miranda"}
        firstName={"Natalia"}
        age={24}
        hair={"dark brown"}
      />
      <PersonCard
        lastName={"Rosen"}
        firstName={"Jonathan"}
        age={27}
        hair={"blonde"}
      />
      <PersonCard lastName={"NathaN"}
       firstName={"Zion"}
        age={1} 
        hair={"BROWN"} />
      <PersonCard
        lastName={"Grace"}
        firstName={"Cecilia"}
        age={5}
        hair={"pink"}
      />
    </div>
  );
}

export default App;