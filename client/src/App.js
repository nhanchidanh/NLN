import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  RentalApartment,
  RentalHouse,
  RentalSpace,
  RentalRoom,
  HomePage,
} from "./containers/Public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
