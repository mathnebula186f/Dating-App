import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Slider from "react-slick";

export default function SlidingImages() {
  const [allUsers, setAllUsers] = useState([]);
  const { username, id } = useContext(UserContext);

  function handleRequest(recieverId) {
    // Add to requested user.requested[]
    //console.log("Button clicked with reciever=", recieverId);
    axios
      .post("/sendRequest", [id, recieverId])
      .then(function (response) {
        // Handle the successful response here
        console.log("POST request successful:", response.data);
      })
      .catch(function (error) {
        // Handle any errors here
        console.error("POST request error:", error);
      });
  }

  useEffect(() => {
    axios
      .get("./usersData")
      .then(function (response) {
        //console.log(response.data);
        setAllUsers(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User Titles:</h1>
      <ul>
        {allUsers.map((user) => (
          <li key={user._id}>
            <h1>{user.username}</h1>
            <button onClick={() => handleRequest(user._id)}>
              Send Request
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
