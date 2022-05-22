import "./TaskForm.styles.css";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    priority: "",
    description: "",
  };

  const onSubmit = () => {
    alert();
  };

  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string().required(),
      status: Yup.string().required(),
      priority: Yup.string().required(),
    });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;

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
            className={errors.title ? "error" : ""}
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
            className={errors.status ? "error" : ""}
          >
            <option value="">Select status</option>
            <option value="new">New</option>
            <option value="inProcess">In process</option>
            <option value="finished">Finished</option>
          </select>
          {errors.status && touched.status && (
            <span className="error-message">{errors.status}</span>
          )}
        </div>
        <div>
          <select
            name="priority"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.priority ? "error" : ""}
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && touched.priority && (
            <span className="error-message">{errors.priority}</span>
          )}
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};
