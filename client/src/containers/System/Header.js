import React from "react";
import { Navigation } from "../Public";

const Header = () => {
  return (
    <div className="grid grid-cols-12  ">
      <div className="col-span-2 font-bold text-white bg-secondary1 ">
        Phongtro123.com
      </div>
      <div className="col-span-10">
        <Navigation isAdmin={true} />
      </div>
    </div>
  );
};

export default Header;
