import React from "react";

const Blog = () => {
  return (
    <div>
      <div className=" bg-gray-300 justify-center items-center p-2 ">
        <div className="m-5 text-left">
          <h1 className="underline m-4 font-bold">
            what is the purpose react router ?
          </h1>
          <li className="ml-9">
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL
          </li>

          <h1 className="underline m-4 font-bold">
            how does context api work ?
          </h1>
          <li className="ml-9">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </li>
          <h1 className="underline m-4 font-bold">what is useref in react ?</h1>
          <li className="ml-9">
            Essentially, useRef is like a “box” that can hold a mutable value in
            its .current property. You might be familiar with refs primarily as
            a way to access the DOM. If you pass a ref object to React with
            ref=myRef , React will set its .current property to the
            corresponding DOM node whenever that node changes.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Blog;
