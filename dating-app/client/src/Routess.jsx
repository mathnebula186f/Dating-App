import { useContext } from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterAndLoginForm from "./RegisterAndLoginForm";
import Chat from "./Chat";
import Profile from "./Profile";
import Homepage from "./HomePage";

export default function Routess() {
  const { username, id } = useContext(UserContext);
  if (username) {
    return (
      //   <BrowserRouter>
      //     <Route path="/" element={<HomePage />} />
      //     <Route path="/profile" element={<Profile />} />
      //   </BrowserRouter>
      <Homepage />
    );
  }

  return <RegisterAndLoginForm />;
}
