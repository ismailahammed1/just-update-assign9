import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const shirt = useLoaderData;
  return (
    <div>
      <h1>This is home{shirt.length}</h1>
    </div>
  );
};

export default Home;
