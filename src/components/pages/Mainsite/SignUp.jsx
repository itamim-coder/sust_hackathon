import React, { useState } from "react";
import signupImg from "../../../assets/images/signup.svg";
import Navbar from "../../Navbar";
import { NavLink, useLocation } from "react-router-dom";
import Footer from "../../Footer";
import useFirebase from "../../../hooks/useFirebase";

function SignUp() {
  const [selectForm, setselectForm] = useState("teacher");
  const [userData, setUserData] = useState({});
  const { user, registerUser, isLoading, authError } = useFirebase();
  // const student=()=>{
  //   selectForm.value= 'Student';
  // };
  // const teacher=()=>{
  //   selectForm.value= 'Teacher';
  // };
  const location = useLocation();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...userData };
    newLoginData[field] = value;
    setUserData(newLoginData);
    console.log(newLoginData);
  };
  console.log(selectForm);
  const handleRegisterSubmit = (e) => {
    if (userData.password !== userData.confirm_password) {
      alert("didnt match");
      return;
    }
    registerUser(userData.email, userData.password, userData.name, selectForm);
    
    e.preventDefault();
  };
  return (
    <>
      {" "}
      <Navbar />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="fs-1 fw-bold">
                      <span className="text-warning">Sign Up</span> As a{" "}
                      <button onClick={() => setselectForm("student")}>
                        Student
                      </button>{" "}
                      or as a{" "}
                      <button onClick={() => setselectForm("teacher")}>
                        Teacher
                      </button>
                    </h3>
                    <p className="text-muted mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    {selectForm == "student" ? (
                      <>
                        {" "}
                        <form onSubmit={handleRegisterSubmit}>
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder="Enter Name"
                              name="name"
                              onBlur={handleOnBlur}
                              required=""
                              autofocus=""
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder="Enter Institution Name"
                              name="institution_name"
                              onBlur={handleOnBlur}
                              required=""
                              autofocus=""
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                            />
                          </div>
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
                          <div className="form-group mb-3">
                            <input
                              type="password"
                              placeholder="Confirm Password"
                              name="confirm_password"
                              onBlur={handleOnBlur}
                              required=""
                              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-warning fw-bold btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          >
                            Sign Up
                          </button>
                          <div className="text-center d-flex justify-content-between mt-4">
                            <p>
                              Already have an Account?{" "}
                              <NavLink
                                to="/signin"
                                className="font-italic text-muted"
                              >
                                <u>Sign In</u>
                              </NavLink>
                            </p>
                          </div>
                        </form>
                      </>
                    ) : (
                      <>
                        <form onSubmit={handleRegisterSubmit}>
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder="Enter Full Name"
                              name="fullname"
                              onBlur={handleOnBlur}
                              required=""
                              autofocus=""
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                            />
                          </div>
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
                              type="text"
                              placeholder="Enter Institute Name"
                              name="instituteName"
                              onBlur={handleOnBlur}
                              required=""
                              autofocus=""
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder="Enter Department"
                              name="department"
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
                          <div className="form-group mb-3">
                            <input
                              type="password"
                              placeholder="Password"
                              name="confirm_password"
                              onBlur={handleOnBlur}
                              required=""
                              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-warning fw-bold btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          >
                            Sign Up
                          </button>
                          <div className="text-center d-flex justify-content-between mt-4">
                            <p>
                              Already have an Account?{" "}
                              <NavLink
                                to="/signin"
                                className="font-italic text-muted"
                              >
                                <u>Sign In</u>
                              </NavLink>
                            </p>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex">
            <img src={signupImg} class="img-fluid" alt="signup"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
