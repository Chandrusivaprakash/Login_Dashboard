import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    function localStorageclear() {
      localStorage.clear("data");
    }
    localStorageclear();
  }, []);

  useEffect(() => {
    function getdata() {
      fetch("http://localhost:8000/person")
        .then((res) => res.json())
        .then((message) => {
          setData(message);
        })
        .catch((err) => err);
    }
    getdata();
  }, []);

  console.log(data);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    function process() {
      data.map((Data) => {
        if (Data.email === formData.email) {
          if (Data.password === formData.password) {
            console.log("success");
            localStorage.setItem("data", Data.firstName);
            navigate("/dashboard");
          }
        }
      });
    }
    process();
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
