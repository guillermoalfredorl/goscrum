import React, { useState } from 'react'
import { useFormik } from "formik"

import "./Register.styles.css"

const Register = () => {
  
  const initialValues = {
    email: "",
    password: ""
  }

  const validate = values => {
    const errors = {}
    
    if(!values.email) {
      errors.email = "Email is required"
    }

    if(!values.password) {
      errors.password = "Password is required"
    }

    return errors
  }

  const onSubmit = () => {
    localStorage.setItem("logged", "yes")
  }

  const formik = useFormik({ initialValues, validate, onSubmit})

  const { handleSubmit, handleChange, values, errors} = formik

  return (
    <div className='auth'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label>UserName</label>
          <input 
            name="username"
            type="text"
            value={values.userName}
            onChange={handleChange}
          />
          {errors.UserName && <div>{errors.UserName}</div>}
        </div>
        <div>
          <label>Password</label>
          <input 
            name="password"
            type="password"
            value={values.password}
            onChange={handleSubmit}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <div>
          <label>Email</label>
          <input 
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <input type="hidden" name="teamID" value=""/>
        <div>
            <label>Role</label>
            <select name="role" onChange={handleChange} value={values.role}>
                <option value="Team Member">Team Member</option>
                <option value="Team Leader">Team Leader</option>
            </select>
          {errors.role && <div>{errors.role}</div>}
        </div>
        <div>
            <label>Continent</label>
            <select name="continent" onChange={handleChange} value={values.continent}>
                <option value="America">America</option>
                <option value="Europe">Europe</option>
                <option value="Otro">Otro</option>
            </select>
          {errors.continent && <div>{errors.continent}</div>}
        </div>
        <div>
            <label>Region</label>
            <select name="region" onChange={handleChange} value={values.region}>
                <option value="Latam">Latam</option>
                <option value="Brasil">Brasil</option>
                <option value="America del Norte">America del Norte</option>
                <option value="Otro">Otro</option>
            </select>
          {errors.region && <div>{errors.region}</div>}
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default Register