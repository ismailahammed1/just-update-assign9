import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

const QuizAnswer = ({ quizQustion }) => {
  const { question, options, correctAnswer } = quizQustion;
  const notify = () => toast(correctAnswer);
  return (
    <div className="m-2 ">
      <div className="card  shadow-lg shadow-cyan-500/50 bg-red-100">
        <h1 className=" text-2xl font-bold text-center">
          <span className="label-text">{question}</span>
        </h1>

        <button onClick={notify}>
          <EyeIcon
            className="h-6 w-6 ml-3 
        text-blue-500 cursor-pointer "
          />
        </button>
        <ToastContainer />
        <div
          className="w-60
      "
        >
          <div className="form-control m-2">
            <label className="label cursor-pointer bg-slate-400">
              <span className="label-text">{options[0]}</span>

              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>
          <div className="form-control m-2">
            <label className="label cursor-pointer bg-slate-400">
              <span className="label-text">{options[1]}</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>
          <div className="form-control m-2">
            <label className="label cursor-pointer bg-slate-400">
              <span className="label-text">{options[2]}</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>
          <div className="form-control m-2">
            <label className="label cursor-pointer bg-slate-400">
              <span className="label-text">{options[3]}</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizAnswer;
