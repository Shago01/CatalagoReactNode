import { useState } from "react";
import "../../css/login.css";

function Login({ setLogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5500/user/play", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      if (!response.ok) {
        const dataError = await response.json();
        setPassword("");
        setUser("");
        alert(dataError.error);
      } else {
        const data = await response.json();
        setLogin(data);
      }
    } catch (error) {
      console.log("Error en login", error);
    }
  };

  return (
    <div className="bg-login">
      <div className="login-container">
        <div className="login">
          <h2 className="login-title">Ingresar</h2>
          <div className="login-body">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-fomr-item">
                <label className="login-fomr-label" htmlFor="#usuario">
                  Usuario
                </label>
                <input
                  className="login-fomr-input"
                  type="text"
                  name="usuario"
                  autoComplete="username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  id="usuario"
                  required
                />
              </div>
              <div className="login-fomr-item">
                <label className="login-fomr-label" htmlFor="#password">
                  Password
                </label>
                <input
                  className="login-fomr-input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  id="password"
                  required
                />
              </div>
              <div className="login-fomr-item">
                <button className="login-btn" type="submit">
                  <p className="login-btn-text"> Ingresar</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
