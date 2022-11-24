import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useAut } from "../../context/authContext";
import { user_list } from "../../Data/users_list";
import {
  Card__Video,
  Header__Card,
  Profile__Header,
  Profile__Section,
} from "./ProfileStyles";
import profileVideo from "../../images/video-profile.mp4";
import { useEffect } from "react";
import axios from "axios";

const initForm = {
  displayName: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Profile = () => {
  const [formValues, setFormValues] = useState(initForm);
  // console.log(user_list[0]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, register, setError } = useAut();

  useEffect(() => {
    console.log("user", currentUser);
    fetchData();
  }, [currentUser]);

  const fetchData = async () => {
    const token = await currentUser.getIdToken();

    const res = await axios.get("http://localhost:3000/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log(res.data);
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await currentUser.getIdToken();
    console.log(formValues);
    try {
      const res = await axios.post(
        "http://localhost:3000/user",
        { ...formValues },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
      // setError("");
      // setLoading(true);
      // const res = await register(email, password);
      // console.log(res);
      // navigate("/informes");
    } catch (e) {
      // setError("Failed to register");
      console.log(e);
    }

    setLoading(false);

    // const fetchData = async (token) => {};
  };
  return (
    <>
      <Dashboard>
        <Profile__Section>
          <Profile__Header>
            <Header__Card>
              <h1>PROFILE JCI</h1>
              <p>
                “Un líder es como un pastor. Se queda detrás del rebaño dejando
                que los animales más hábiles caminen adelante mientras todos los
                demás los siguen sin darse cuenta de que en realidad están
                siendo dirigidos desde la retaguardia”.
                <span>– Nelson Mandela</span>
              </p>
              <Card__Video>
                <video src={profileVideo} autoPlay loop muted></video>
              </Card__Video>
            </Header__Card>
          </Profile__Header>

          <h1>PERFIL JCI</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="displayName"
              id="displayName"
              placeholder="nombre de usuario"
              onChange={handleInputChange}
            />
            <input
              type="firstname"
              name="firstname"
              id="firstname"
              placeholder="nombre"
              onChange={handleInputChange}
            />
            <input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="apellidos"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleInputChange}
            />
            <button type="submit">CREAR</button>
          </form>
          <div></div>
        </Profile__Section>
      </Dashboard>
    </>
  );
};

export default Profile;
