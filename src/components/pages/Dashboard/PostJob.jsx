import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SideNav from "../../Dashboard/SideNav";
import MobileNav from "../../Dashboard/MobileNav";
import Header from "../../Dashboard/Header";
// import useFirebase from "../../hooks/useFirebase";
import { useForm } from "react-hook-form";

function PostJob() { 
  //       const { user } = useFirebase();
  //   console.log(user);
  // const { register, handleSubmit } = useForm();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      jobTitle: "",
      skills: "",
      budget: "",
      category: "web development",
      details: "",
      
    },
  });
  const onSubmit = (data) => {
    fetch("https://errandbee.onrender.com/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result),
      resetField("jobTitle"),
      resetField("skills"),
      resetField("budget"),
      resetField("category"),
      resetField("details"),
      );
    console.log(data);
    alert("Successfully added");
    
  };

  return (
    <>
      <div className="container-fluid desktop-view">
        <div className="row">
          <Header />
          <div className="col-md-2 sidenav-bg">
            <SideNav />
          </div>
          <div className="col-md-10">
            <div className="container mb-5">
              <p className="common-title text-center fs-2 fw-bold my-3">
                Post Your Job
              </p>
              <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Your Job Title"
                  defaultValue=""
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  {...register("jobTitle")}
                />
                <br></br>
                <input
                  placeholder="Skills Required"
                  defaultValue=""
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  {...register("skills")}
                />
                <br></br>
                <input
                  type="number"
                  placeholder="Estimate Budget"
                  defaultValue=""
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  {...register("budget")}
                />
                <br></br>
                <select
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  {...register("category")}
                >
                  <option value="web development">web</option>
                  <option value="graphics">graphics</option>
                  <option value="logo">logo</option>
                </select>
                <br></br>
                <input
                  placeholder="Details"
                  defaultValue=""
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  {...register("details")}
                />
                <br></br>
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostJob;