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
  confirmPassword: string;
  email: string;
  gender: string;
  level: string;
}

const validationSchema = Yup.object({
  userName: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  gender: Yup.string().required("Please select your gender"),
  level: Yup.string().required("Please select your level"),
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
        initialValues={{
          userName: "",
          password: "",
          confirmPassword: "",
          email: "",
          gender: "",
          level: "",
        }}
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
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" component="div" className="message" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="message" />
          </div>

          <div>
            <label>Gender:</label>
            <div role="group" aria-labelledby="gender">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label style={{ marginLeft: "10px" }}>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <label style={{ marginLeft: "10px" }}>
                <Field type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
            <ErrorMessage name="gender" component="div" className="message" />
          </div>

          <div>
            <label htmlFor="level">Level:</label>
            <Field as="select" name="level">
              <option value="">Select your level</option>
              <option value="fresher">Fresher</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </Field>
            <ErrorMessage name="level" component="div" className="message" />
          </div>

          <button type="submit">Login</button>

          {loginStatus && <div className="login-status">{loginStatus}</div>}
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
