import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import { BrowserRouter } from "react-router-dom";

const DOGS_API_URL = "http://localhost:5001/dogs";

/** Component for entire app.
 *
 * Props: none
 *
 * State:
 * - dogsLoaded: boolean
 * - dogs: array of dog objects like [{name, src, }]
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  const [dogsLoaded, setDogsLoaded] = useState(false);
  const [dogs, setDogs] = useState(getDogs);

  /** makes request to DOGS_API and sets state of dogs and dogsLoaded */
  async function getDogs() {
    const resp = await fetch(DOGS_API_URL);
    const data = await resp.json();
    setDogs(data);
    setDogsLoaded(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {dogsLoaded ? (
          <div>
            <NavBar dogNames={dogs.map(dog => dog.name)} />
            <RouteList dogs={dogs} />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
