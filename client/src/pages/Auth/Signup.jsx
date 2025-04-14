import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");
  const [error, setError] = useState(null);

  //Handle SignUp form Submit
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter the full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid Email address");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError("");

    //Signup API Call
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your's details below
        </p>

        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Jhon"
              type="text"
            />
            <Input
              vlaue={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email address"
              placeholder="jhon@example.com"
              type="text"
            />
            <Input
              vlaue={password}
              onChange={({ target }) => setPassword(target.password)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
            <Input
              vlaue={password}
              onChange={({ target }) => setPassword(target.password)}
              label="Admin Invite Token"
              placeholder="6 Digits code"
              type="text"
            />
          </div>

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

            <button type="submit" className="btn-primary" onClick={handleSignup}>
              SIGN UP
            </button>

            <p className="text-[13px] text-slate-800 mt-3">
              Already have an account{" "}
              <Link className="font-medium text-primary underline" to="/login">
                {" "}
                Login
              </Link>
            </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
