import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Api";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Онгоинг" fetchUrl={requests.requestUpcoming} />
      <Row rowId="2" title="Популярное" fetchUrl={requests.requestPopular} />
      <Row rowId="3" title="В тренде" fetchUrl={requests.requestTrending} />
      <Row rowId="4" title="Бестселлеры" fetchUrl={requests.requestTopRated} />
      <Row rowId="5" title="Французские комедии" fetchUrl={requests.requestFrenchComedies} />

    </>
  );
};

export default Home;
