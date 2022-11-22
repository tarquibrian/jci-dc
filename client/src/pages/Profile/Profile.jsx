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

const Profile = () => {
  // console.log(user_list[0]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, register, setError } = useAut();

  useEffect(() => {
    console.log("user", currentUser);
    fetchData()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   return setError("Passwords do not match");
    // }
    try {
      // setError("");
      // setLoading(true);
      const res = await register(email, password);
      console.log(res);
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
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
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
