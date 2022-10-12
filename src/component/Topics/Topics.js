// @ts-nocheck
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Topics = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="m-5 ">
      <div className="card w-76 shadow-lg shadow-cyan-500/50 bg-red-100">
        <figure className=" bg-slate-600">
          <img src={logo} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{name}</h2>
          <p>Just See the Qustion and Select Answer</p>
          <div className="card-actions justify-between flex">
            <div className="mt-3">
              <p className="font-bold"> Quiz: {total}</p>
            </div>
            <div>
              <Link to={`/quiz/${id}`}>
                <button className="btn btn-primary ">
                  {name}
                  <ArrowRightIcon className="h-6 w-6 ml-3 text-blue-500" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
