import { Routes, Route } from "react-router-dom";
import { Home, Login, Rental, HomePage, DetailPost } from "./containers/Public";
import { path } from "./utils/constant";
import { System } from "./containers/System";

function App() {
  return (
    <div className=" bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={"chi-tiet/*"} element={<DetailPost />} />
        </Route>
      </Routes>

      <Route path={path.SYSTEM} element={<System />}></Route>
    </div>
  );
}

export default App;
