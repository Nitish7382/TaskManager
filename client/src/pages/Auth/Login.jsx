import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //Handle login form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
          Please Enter Your Details to login
        </p>

        <form>
          <Input
            vlaue={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email address"
            placeholder="jhon@example.com"
            type="text"
          />
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
