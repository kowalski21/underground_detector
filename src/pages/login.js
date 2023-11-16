import LoginForm from "@/components/LoginForm";
import React from "react";

const AuthLoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center mt-3">
          <h3>Underground Fault Detector System </h3>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default AuthLoginPage;
