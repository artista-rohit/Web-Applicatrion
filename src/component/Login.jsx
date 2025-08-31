import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>this is my new login page </h1>
      <p>here user will add details and information</p>
      <Link to="/" className="text-4xl font-black text-amber-600" >go back to the dashboard</Link>
       <Link to="/" className=" font-bold text-2xl text-blue-800 underline">
              go to dashboard now
            </Link>
    </div>
  );
};

export default Login;
