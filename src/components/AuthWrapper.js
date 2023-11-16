import { useAuth } from "@/hooks/auth";
import React from "react";
import { Loader } from "rsuite";

const AuthWrapper = ({ children }) => {
  const { user, isLoading } = useAuth();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">{isLoading && <Loader />}</div>
      </div>
      {user && children}
    </div>
  );
};

export default AuthWrapper;
