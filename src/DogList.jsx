import { Link } from "react-router-dom";

/** Renders
 *

 */

function DogList({ dogs}) {
  return (
    <div>
      {dogs.map((d) => (
        <div>
           <img src={`../public/${d.src}.jpg`} alt={`${d.name}`} />
          <Link to={`${d.name}`}>{d.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
