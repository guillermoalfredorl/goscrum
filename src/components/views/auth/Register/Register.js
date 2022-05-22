import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../Auth.styles.css";

const Register = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://goscrum-api.alkemy.org/auth/data")
      .then((response) => response.json())
      .then((data) => setData(data.result));
  }, []);

  const initialValues = {
    username: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
  };

  const validationSchema = () =>
    Yup.object().shape({
      username: Yup.string().min(4).required(),
      password: Yup.string().required(),
      email: Yup.string().email().required(),
      teamID: Yup.string().required(),
      role: Yup.string().required(),
      continent: Yup.string().required(),
      region: Yup.string().required(),
    });

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label>UserName</label>
          <input
            className={errors.username && touched.username ? "error" : ""}
            name="username"
            type="text"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.username && touched.username && (
            <span className="error-message">{errors.username}</span>
          )}
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
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            className={errors.email && touched.email ? "error" : ""}
            name="email"
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <input type="hidden" name="teamID" value="" />
        <div>
          <label>Role</label>
          <select
            className={errors.role && touched.role ? "error" : ""}
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
          >
            <option value="">Select Role</option>
            {data?.Rol?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.role && touched.role && (
            <span className="error-message">{errors.role}</span>
          )}
        </div>
        <div>
          <label>Continent</label>
          <select
            className={errors.continent && touched.continent ? "error" : ""}
            name="continent"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.continent}
          >
            <option value="">Select Continent</option>
            {data?.continente?.map((continent) => (
              <option value={continent} key={continent}>
                {continent}
              </option>
            ))}
          </select>
          {errors.continent && touched.continent && (
            <span className="error-message">{errors.continent}</span>
          )}
        </div>
        {values.continent === "America" && (
          <div>
            <label>Region</label>
            <select
              className={errors.region && touched.region ? "error" : ""}
              name="region"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.region}
            >
              <option value="">Select Region</option>
              {data?.region?.map((region) => (
                <option value={region} key={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && touched.region && (
              <span className="error-message">{errors.region}</span>
            )}
          </div>
        )}

        <div>
          <button type="submit">Send</button>
        </div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
