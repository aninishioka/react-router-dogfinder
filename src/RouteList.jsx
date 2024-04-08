import { Routes, Route } from "react-router-dom";
import DogList from './DogList.jsx';
import DogDetails from './DogDetails.jsx';

function RouteList({ dogs }) {
    return (
        <Routes>
            <Route path='/dogs' element={<DogList dogs={dogs} />} />
            <Route path='/dogs/:name' element={<DogDetails dogs={dogs} />} />
        </Routes>
    );
}

export default RouteList;