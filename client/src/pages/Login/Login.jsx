import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginCard, LoginSection } from "./LoginStyles";

import { useAut } from "../../context/authContext";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, login, setError } = useAut();

  useEffect(() => {
    if (currentUser) {
      navigate("/jci-home");
    }
    console.log(currentUser);
  }, [currentUser, navigate]);

  const submitForm = async (e) => {
    e.preventDefault();

    // await axios
    //   .post("http://192.168.1.7:8080/signup", {
    //     email: email,
    //     password: password,
    //   })
    //   // .then((response) => {
    //   //   console.log(response);
    //   //   console.log(email, password);
    //   // });

    try {
      // setError("");
      // setLoading(true);
      const res = await login(email, password);
      console.log(res);
      navigate("/jci-home");
    } catch (e) {
      console.log(e)
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
