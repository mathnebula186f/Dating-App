import { useState } from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import Profile from "./Profile";

export default function Homepage() {
  const [show, setShow] = useState(0);
  return (
    <div className="relative">
      <Navbar setShow={setShow} />
      {show === 0 && (
        <>
          <div>HOMEPAGE</div>
          <div className="bottom-0 w-full">
            <Chat />
          </div>
        </>
      )}
      {show === 1 && <Profile />}
    </div>
  );
}
