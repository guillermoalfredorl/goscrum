import "./TaskForm.styles.css";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  };

  const onSubmit = () => {
    fetch(`${API_ENDPOINT}auth/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
      body: JSON.stringify({ task: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resetForm();
        alert();
      });
  };

  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string().required(),
      status: Yup.string().required(),
      description: Yup.string().required(),
      importance: Yup.string().required(),
    });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    resetForm,
  } = formik;

  return (
    <section className="tasks-form">
      <h2>Create task</h2>
      <p>Create your tasks</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title && touched.title ? "error" : ""}
            value={values.title}
          />
          {errors.title && touched.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>
        <div>
          <select
            name="status"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.status && touched.status ? "error" : ""}
            value={values.status}
          >
            <option value="">Select status</option>
            <option value="NEW">New</option>
            <option value="IN PROGRESS">In process</option>
            <option value="FINISHED">Finished</option>
          </select>
          {errors.status && touched.status && (
            <span className="error-message">{errors.status}</span>
          )}
        </div>
        <div>
          <select
            name="importance"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.importance && touched.importance ? "error" : ""}
            value={values.importance}
          >
            <option value="">Select importance</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
          {errors.importance && touched.importance && (
            <span className="error-message">{errors.importance}</span>
          )}
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.description && touched.description ? "error" : ""}
            value={values.description}
          />
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};
