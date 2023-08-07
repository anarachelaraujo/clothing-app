import React, { useState } from 'react';
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post('http://127.0.0.1:5000/api/register', formData)
    console.log(formData)
    .then((response) => {
      setMessage(response.data.message);
      console.log(response)
    })
    .catch((error) => {
      setMessage(error.response.data.message);
      console.log(error)
    });

    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;