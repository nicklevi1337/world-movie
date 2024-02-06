import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  //console.log(user)
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      await logOut();
      navigate('/world-movies')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex item-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/world-movies">
        <h1 className="text-violet-600 text-4xl font-bold cursor-pointer">
          World Movies
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Аккаунт</button>
          </Link>
          
            <button onClick={handleLogout} className="bg-violet-600 px-6 py-2 rounded cursor-pointer text-white">
              Выйти{" "}
            </button>
          
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button className="text-white pr-4">Зарегистрироваться</button>
          </Link>
          <Link to="/login">
            <button className="bg-violet-600 px-6 py-2 rounded cursor-pointer text-white">
            Войти{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
