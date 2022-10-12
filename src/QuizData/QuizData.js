import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizData = () => {
  const quizData = useLoaderData();
  console.log(quizData);

  return (
    <div>
      <h1>QuizData</h1>
    </div>
  );
};

export default QuizData;
