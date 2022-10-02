import {Routes, Route} from "react-router-dom";
import MakeUp from "./Makeup";
import Skin from "./Skin";
import Hair from "./Hair";
import Appliances from "./Appliances";
import BathAndBaby from "./BathAndBaby";
import Natural from "./Natural";
import MomAndBaby from "./MomAndBaby";
import HealthAndWellness from"./HealthAndWellness";
import Men from "./Men";
import Fragrance from "./Frangrance";
import PopUps from "./Popups";
import Home from "./Home";
import ShowDetails from "./ShowDetails";
import Cart from "./Cart";
import Login from "./Login";
 
function AllRoutes() {
  return (
    <Routes>

        <Route path="/" element={<Home />}/>

        <Route path="/:category/:id" element={<ShowDetails />}/>

        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart />}/>

        <Route path="/makeup" element={<MakeUp />}/>

        <Route path="/skin" element={<Skin />}/>

        <Route path="/hair" element={<Hair />}/>

        <Route path="/appliances" element={<Appliances />}/>

        <Route path="/bathandbaby" element={<BathAndBaby />}/>

        <Route path="/natural" element={<Natural />}/>

        <Route path="/momandbaby" element={<MomAndBaby />}/>

        <Route path="/healthandwellness" element={<HealthAndWellness />}/>

        <Route path="/men" element={<Men />}/>

        <Route path="/fragrance" element={<Fragrance />}/>
        
        <Route path="/popup" element={<PopUps />}/>

    </Routes>
  )
}

export default AllRoutes