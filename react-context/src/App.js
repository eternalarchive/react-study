import React, { useState } from "react";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import PersonContext from "./contexts/PersonContext";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { id: 0, name: "Hee", age: 27 },
    { id: 1, name: "Jeong", age: 25 }
  ]);

  return (
    <PersonContext.Provider
      value={{
        persons,
        old: () => {
          setPersons(persons =>
            persons.map(person => ({ ...person, age: person.age + 1 }))
          );
        }
      }}
    >
      <div className="App">
        <header className="App-header">
          <Example1 />
          <Example2 />
          <Example3 />
        </header>
      </div>
    </PersonContext.Provider>
  );
}

export default App;
