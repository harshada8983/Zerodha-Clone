import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://zerodha-clone-ycv1.onrender.com/signup",
        inputValue
      );

      alert("Signup Successful!");
      console.log(response.data);

      setInputValue({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter userame"
          value={inputValue.username}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={inputValue.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={inputValue.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  input: {
    marginBottom: "15px",
    padding: "12px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Signup;