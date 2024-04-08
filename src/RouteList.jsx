import { Routes, Route, Navigate } from "react-router-dom";
import DogList from './DogList.jsx';
import DogFilter from './DogFilter.jsx';


/**RouteList component that contains all Routes
 *
 * Props:
 * - dogs: array of dog objects [{dog}, ...]
 *
 * App -> RouteList -> { DogList, DogDetails }
*/

function RouteList({ dogs }) {
    return (
        <Routes>
            <Route path='/dogs' element={<DogList dogs={dogs} />} />
            <Route path='/dogs/:name' element={<DogFilter dogs={dogs} />} />
            <Route path='*' element={<Navigate to="/dogs" />} />
        </Routes>
    );
}

export default RouteList;