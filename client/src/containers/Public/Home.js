import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../components";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);
  return (
    <div className="w-full h-full ">
      <Header></Header>
      <Navigation></Navigation>
      <Search></Search>
      <div className="w-4/5 mx-auto flex flex-col justify-start mt-5">
        <Outlet></Outlet>
      </div>
      <div className="w-4/5 mx-auto mt-5 space-y-8">
        <Intro></Intro>
        <Contact></Contact>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
