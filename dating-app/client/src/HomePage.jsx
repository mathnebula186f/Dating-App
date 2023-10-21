import { useState } from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import Profile from "./Profile";
import SlidingImages from "./SlidingImages"
import RequestSection from "./RequestSection";

export default function Homepage() {
  const [show, setShow] = useState(0);
  return (
    <div className="relative">
      <Navbar setShow={setShow} />
      {show === 0 && (
        <>
          <div>HOMEPAGE</div>
          <SlidingImages />
          <RequestSection/>
          <Chat />
        </>
      )}
      {show === 1 && <Profile />}
    </div>
  );
}
