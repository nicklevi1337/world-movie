import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover "
          src="https://w.forfun.com/fetch/5b/5b96f79aab8de6f9290a143cf50d1224.jpeg?w=1470&r=0.5625"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[400px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <p className="text-3xl md:text-5xl font-bold">Мои фильмы</p>
        </div>
      </div>
      <SavedShows/>
    </>
  );
};

export default Account;

//https://fons.pibig.info/uploads/posts/2023-06/1686129059_fons-pibig-info-p-fon-netfliks-vkontakte-65.jpg