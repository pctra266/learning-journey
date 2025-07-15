import React, { useState } from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const fakeUsers = [
  { username: "alice", password: "1234" },
  { username: "bob", password: "password" },
  { username: "charlie", password: "qwerty" },
];

interface LoginValues {
  userName: string;
  password: string;
  email: string;
}

const validationSchema = Yup.object({
  userName: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

const Login: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handleSubmit = (values: LoginValues) => {
    const user = fakeUsers.find(
      (u) => u.username === values.userName && u.password === values.password
    );
    if (user) {
      setLoginStatus(`Login successful for ${values.email}!`);
    } else {
      setLoginStatus("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ userName: "", password: "", email: "" }} 
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor="userName">Username:</label>
            <Field name="userName" type="text" />
            <ErrorMessage name="userName" component="div" className="message" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="message" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="message" />
          </div>

          <button type="submit">Login</button>

          {loginStatus && <div className="login-status">{loginStatus}</div>}
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
