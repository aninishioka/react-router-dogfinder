import { v4 as uuid } from "uuid";
import "./DogDetails.css";


/**DogDetails component that displays a specific dog's information
 *
 * Props:
 * - dog: single dog object { name, age, src, facts }
 *
 * DogFilter -> DogDetails
*/

function DogDetails({ dog }) {
  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p className="DogDetails-age">Age: {dog.age}</p>
      <img
        className="DogDetails-image"
        src={`/${dog.src}.jpg`}
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
