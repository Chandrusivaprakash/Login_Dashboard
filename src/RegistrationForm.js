import React, { useState } from "react";
import "./RegistrationForm.css"; 
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    function handledata() {
      fetch("http://localhost:8000/person", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      }).then((res) => {
        console.log(formData);
        navigate("/login");
      });
    }
    handledata();
  };

  function navlogin() {
    navigate("/login");
  }

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registration Form</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <button
          onClick={() => {
            navlogin();
          }}
        >
          login
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
