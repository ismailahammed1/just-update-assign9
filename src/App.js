import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import Home from "./component/Home/Home";
import Main from "./component/Main/Main";
import Topics from "./component/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz/"),
          element: <Home></Home>,
        },
        {
          path: "/Topics",
          element: <Topics></Topics>,
        },
        {
          path: "/Blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
