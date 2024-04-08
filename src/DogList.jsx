import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Renders
 *

 */

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <div key={uuid()}>
          <img src={`../${dog.src}.jpg`} alt={`${dog.name}`} />
          <Link to={`${dog.name}`}>{dog.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
