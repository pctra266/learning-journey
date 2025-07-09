import React, { useState } from "react";
import "./Login.css";

const fakeUsers = [
  { username: "alice", password: "1234" },
  { username: "bob", password: "password" },
  { username: "charlie", password: "qwerty" },
];

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [validUser,setValidUser] = useState(false);

  const canSubmit = username.trim() !== "" && password.trim() !== "";



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedUser = fakeUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      setMessage("Login successful!");
      setValidUser(false);
    } else {
      setMessage("Invalid username or password.");
      setValidUser(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Login</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>

        <button type="submit" className="submit-btn" disabled={!canSubmit}>
          Submit
        </button>
         <div className={validUser? "danger": "success"}>{message}</div>
        
      </form>
    </div>
  );
};

export default Login;
