import { useParams } from "react-router-dom";
import "./DogFilter.css";
import DogDetails from "./DogDetails";

/**DogFilter component that selects specific dog from url
 *
 * Props:
 * - dogs: array of dog objects [{ name, age, src, facts }, ...]
 *
 * RouteList -> DogFilter -> DogDetails
*/

function DogFilter({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <div className="DogFilter-404">Dog not found!</div>;
  }

  return (
    <DogDetails dog={dog} />
  );
}

export default DogFilter;