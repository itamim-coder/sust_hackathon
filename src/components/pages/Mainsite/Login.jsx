import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import signinImg from "../../../assets/images/signin.svg";
import useFirebase from "../../../hooks/useFirebase";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// import auth from "../Firebase/firebase.init";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";
// import Footer from "../../Components/Mainsite/Footer";
// import Navbar from "../../Components/Mainsite/Navbar";

function Login() {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInUsingGoogle, isLoading, authError } =
    useFirebase();

  const location = useLocation();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

    console.log(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location);

    alert("Successfully Login");
    e.preventDefault();
  };

  return (
    <>
    <Navbar />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6 d-none d-md-flex">
            <img src={signinImg} class="img-fluid" alt="signin"></img>
          </div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="fs-1 fw-bold">
                      <span className="text-warning">Login</span> Now
                    </h3>
                    <p className="text-muted mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    <form onSubmit={handleLoginSubmit}>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          onBlur={handleOnBlur}
                          required=""
                          autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          onBlur={handleOnBlur}
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-warning fw-bold btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>

                      <button
                        className="btn btn-warning fw-bold btn-block text-uppercase mb-2 rounded-pill shadow-sm ms-2"
                        onClick={signInUsingGoogle}
                      >
                        Sign In With Google
                      </button>

                      <div className="text-center d-flex justify-content-between mt-4">
                        <p>
                          Do not have an Account?{" "}
                          <NavLink
                            to="/signup"
                            className="font-italic text-muted"
                          >
                            <u>Create New Account</u>
                          </NavLink>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>               
    </>
  );
}

export default Login;