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
 * - dogs: array of dog objects like [{name, age, src, facts}, ...]
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  const [dogs, setDogs] = useState({
    data: [],
    isLoaded: false,
  });

  /** makes request to DOGS_API and sets state of dogs and dogsLoaded */
  async function getDogs() {
    const resp = await fetch(DOGS_API_URL);
    const data = await resp.json();
    setDogs({
      data: data,
      isLoaded: true,
    });
  }

  if (!dogs.isLoaded) {
    getDogs();
    return <h1 className="Loading">Loading...</h1>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar dogNames={dogs.data.map(dog => dog.name)} />
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
