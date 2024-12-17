import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email });
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  const handleSignUp = async () => {
    try {
      navigate("/signup");
    } catch (err) {
      console.error("Signup Navigation Error", err);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className=" w-full max-w-md shadow-2xl bg-base-100">
        <div className="">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
          </div>
          <form>
            <div className="flex flex-col justify-center p-5">
              <label className="flex justify-start">
                <span className="">Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="border border-r-4 " onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className=" mt-6 flex justify-center">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none " onClick={handleLogin}>Login</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="">
              Don't have an account?
              <a onClick={handleSignUp} className="font-medium text-blue-600 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
