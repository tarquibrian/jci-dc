import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginCard, LoginSection } from "./LoginStyles";

import { useAut } from "../../context/authContext";
import { auth } from "../../config/firebase-config";
import { useReducer } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, login, setError } = useAut();

  useEffect(() => {
    if (currentUser) {
      // navigate("/jci-home");
    }
    console.log(currentUser);
  }, [currentUser, navigate]);

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { user } = await login(email, password);
      const idtoken = await user.getIdToken();
      const res = await axios.post("http://localhost:3000/auth", {
        idtoken,
      });

      console.log(res);
      // user.getIdToken().then((token) => {
      // axios.get("http://localhost:3000/login", { token });
      // const csrf = getCookie("csrfToken");
      // console.log("token", csrf);
      // navigate("/jci-home");
      // });
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };
  return (
    <LoginSection>
      <LoginCard>
        <form onSubmit={submitForm}>
          <h1>LOGIN</h1>
          {/* <label htmlFor="email">Nombre de Usuario</label> */}
          <input
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label htmlFor="password">Contraseña</label> */}
          <input
            id="password"
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Link to="/jci-home"> */}
          <button type="submit">Acceder</button>
          {/* </Link> */}
        </form>
      </LoginCard>
    </LoginSection>
  );
};
0;

export default Login;
