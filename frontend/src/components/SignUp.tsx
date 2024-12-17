import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", { username, email });
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    
      <div className="min-h-screen flex items-center justify-center m-10 bg-base-200">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-base-content mb-6">Welcome Back</h2>
            </div>
            <form>
              <div className="flex flex-col justify-center p-5">
                <label className="flex justify-start">
                  <span className="">UserName</span>
                </label>
                <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className=" border border-r-4" />
              </div>
              <div className="flex flex-col justify-center p-5 ">
                <label className="flex justify-start">
                  <span className="">Email</span>
                </label>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className=" border border-r-4" />
                <div className="flex justify-center mt-6">
                  <button onClick={handleSignup} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none">Sign Up</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
  
    
  );
};

export default Signup;
