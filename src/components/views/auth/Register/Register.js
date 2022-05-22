import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Switch, FormControlLabel } from "@mui/material";

import "../Auth.styles.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const Register = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_ENDPOINT}auth/data`)
      .then((response) => response.json())
      .then((data) => setData(data.result));
  }, []);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
    switch: false,
  };

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string().min(4).required(),
      password: Yup.string().required(),
      email: Yup.string().email().required(),
      role: Yup.string().required(),
      continent: Yup.string().required(),
      region: Yup.string().required(),
    });

  const handleChangeContinent = (value) => {
    setFieldValue("continent", value);
    if (value !== "America") setFieldValue("region", "Otro");
  };

  const onSubmit = () => {
    const teamID = !values.teamID ? uuidv4() : values.teamID;
    fetch(`${API_ENDPOINT}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          userName: values.userName,
          password: values.password,
          email: values.email,
          teamID,
          role: values.role,
          continent: values.continent,
          region: values.region,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        navigate("/registered/" + data?.result?.user?.teamID, {
          replace: true,
        })
      );
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label>User Name</label>
          <input
            className={errors.userName && touched.userName ? "error" : ""}
            name="userName"
            type="text"
            value={values.userName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.userName && touched.userName && (
            <span className="error-message">{errors.userName}</span>
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
        <FormControlLabel
          control={
            <Switch
              value={values.switch}
              onChange={() =>
                formik.setFieldValue("switch", !formik.values.switch)
              }
              name="switch"
              color="secondary"
            />
          }
          label="Do you belong to a team?"
        />
        {values.switch && (
          <div>
            <label>Please introduce the Team ID</label>
            <input
              type="text"
              name="teamID"
              value={values.teamID}
              onChange={handleChange}
            />
          </div>
        )}
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
            onChange={(event) =>
              handleChangeContinent(event.currentTarget.value)
            }
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
