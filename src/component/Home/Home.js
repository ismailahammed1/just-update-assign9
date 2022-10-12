// @ts-nocheck
import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";

const Home = () => {
  const topic = useLoaderData();
  const friends = topic.data;

  return (
    <div className=" justify-center">
      <h1 className=" text-2xl font-bold text-center">This is home</h1>
      <div className=" ">
        <div className="grid md:grid-cols-4 gap-4 justify-center ">
          {friends.map((friends) => (
            <Topics key={friends.id} friends={friends}></Topics>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
