import { clearToken } from "@/lib/client";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/router";
import React from "react";

const WelcomeBanner = () => {
  const router = useRouter();
  const { authUser } = useAuthStore();

  const handleLogout = () => {
    clearToken();
    router.push("/login");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-12 mt-3">
        <div className="row">
          <div className="col-12 text-center align-items-center">
            <h3>Welcome to Fault Detection System</h3>
            {/* {JSON.stringify(authUser)} */}
            <span className="h4">Hi, {authUser.name}</span>
            <button className="btn btn-outline-dark btn-sm ml-2" onClick={handleLogout}>
              <i className="fe fe-log-out mr-2"></i>
              Logout
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default WelcomeBanner;
