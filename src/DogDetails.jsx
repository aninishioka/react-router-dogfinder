import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./DogDetails.css";


/**DogDetails component that displays a specific dog's information
 *
 * Props:
 * - dogs: array of dog objects [{ name, age, src, facts }, ...]
 *
 * App -> RouteList -> DogDetails
*/

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find(d => d.name.toLowerCase() === name);

  if (!dog) {
    return <div className="DogDetails-404">Dog not found!</div>;
  }

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p className="DogDetails-age">Age: {dog.age}</p>
      <img
        className="DogDetails-image"
        src={`../${dog.src}.jpg`}
        alt={dog.name} />
      <ul className="DogDetails-facts">
        {
          dog.facts.map(f =>
            <li key={uuid()}>{f}</li>
          )
        }
      </ul>
    </div>
  );
}

export default DogDetails;
