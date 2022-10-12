// @ts-nocheck

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "./component/Blog/Blog";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Main from "./component/Main/Main";
import Statistics from "./component/Statistics/Statistics";
import Topics from "./component/Topics/Topics";
import QuizData from "./QuizData/QuizData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/Home",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz/"),
        element: <Home></Home>,
        errorElement: <Error />,
      },
      {
        path: "/Topics",

        element: <Topics></Topics>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/quiz/:quizId",
        element: <QuizData></QuizData>,
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
      },
    ],
  },
]);
export default router;
