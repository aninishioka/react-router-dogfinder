import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./DogList.css";


/**DogList component that displays all dogs
 *
 * Props:
 * - dogs: array of dog objects [{ name, age, src, facts }, ...]
 *
 * App -> RouteList -> DogList
*/

function DogList({ dogs }) {
  return (
    <div className="DogList">
      {dogs.map((dog) => (
        <div className="DogList-dog" key={uuid()}>
          <img
            className="DogList-image"
            src={`../${dog.src}.jpg`}
            alt={`${dog.name}`} />
          <br/>
          <Link
          className="DogList-link"
          to={`${dog.name.toLowerCase()}`}>{dog.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
