import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find(d => d.name === name);

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <img src={`../${dog.src}.jpg`} alt={dog.name} />
      <ul>
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
