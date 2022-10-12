// @ts-nocheck
import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizAnswer from "../component/QuizAnswer/QuizAnswer";

const QuizData = () => {
  const quizData = useLoaderData();
  const quizQustion = quizData.data.questions;

  return (
    <div className="m-5 justify-center">
      <div className="card  shadow-lg shadow-cyan-500/50 bg-red-100">
        <h1 className=" text-2xl font-bold text-center"> QuizData for here</h1>
        <div className="">
          {quizQustion.map((quizQustion) => (
            <QuizAnswer
              key={quizQustion.id}
              quizQustion={quizQustion}
            ></QuizAnswer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizData;
