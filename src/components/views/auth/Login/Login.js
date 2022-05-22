import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import "../Auth.styles.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string().min(4).required(),
      password: Yup.string().required(),
    });

  const onSubmit = () => {
    const { userName, password } = values;
    fetch(`${API_ENDPOINT}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data?.result?.token);
        navigate("/", { replace: true });
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div>
          <label>UserName</label>
          <input
            className={errors.userName && touched.userName ? "error" : ""}
            name="userName"
            type="text"
            value={values.userName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.userName && touched.userName && <div>{errors.userName}</div>}
        </div>
        <div>
          <label>Password</label>
          <input
            className={errors.password && touched.password ? "error" : ""}
            name="password"
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <div>
          <button type="submit">Continue</button>
        </div>
        <div>
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
