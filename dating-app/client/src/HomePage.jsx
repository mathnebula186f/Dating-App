import { useState } from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import Profile from "./Profile";
import SlidingImages from "./SlidingImages"

export default function Homepage() {
  const [show, setShow] = useState(0);
  return (
    <div className="relative">
      <Navbar setShow={setShow} />
      {show === 0 && (
        <>
          <div>HOMEPAGE</div>
          <SlidingImages />
          <Chat />
        </>
      )}
      {show === 1 && <Profile />}
    </div>
  );
}
