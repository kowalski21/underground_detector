import { useNotify } from "@/hooks/notify";
import { authLogin } from "@/lib/auth";
import { setToken } from "@/lib/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { Form } from "rsuite";

const LoginForm = () => {
  const router = useRouter();
  const { showError, showMsg } = useNotify();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (key) => (e) => {
    setValues({ ...values, [key]: e.target.value });
  };
  const handleLogin = async () => {
    const [data, error] = await authLogin(values);
    if (error) {
      showError(error);
    } else {
      setToken(data.access_token);
      showMsg("Login Success");
      router.push("/");
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h3">Account Login</div>
      </div>
      <div className="card-body">
        {/* {JSON.stringify(values)} */}
        <FormGroup>
          <Label>Username</Label>
          <Input value={values.username} onChange={handleChange("username")} size={"lg"} />
        </FormGroup>
        <FormGroup mt-3>
          <Label>Password</Label>
          <Input value={values.password} onChange={handleChange("password")} size={"lg"} />
        </FormGroup>
        {values.password && values.username && (
          <FormGroup mt-3>
            <button className="btn btn-primary btn-lg btn-block" onClick={handleLogin}>
              Login
            </button>
          </FormGroup>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
