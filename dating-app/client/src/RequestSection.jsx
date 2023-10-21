import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function RequestSection() {
    const [requestList, setRequestList] = useState([]);
    const {username,id}=useContext(UserContext);
    useEffect(() => {
        console.log("Hi");
        axios.get('/fetchRequests',{id} ).then(response => {
            setRequestList(response.data);
        });}
        ,[]);
    
    function handleAccept(GivenId){
        const myId=id;
        const tobeAccepted=GivenId;
        axios
          .post("/AcceptRequest", [myId,tobeAccepted])
          .then(function (response) {
            // Handle the successful response here
            console.log("POST  Accept request successful:");
          })
          .catch(function (error) {
            // Handle any errors here
            console.error("POST request error:", error);
          });
    }
    return ( 
        <div>
            hi
            {requestList.map((user) => (
          <li key={user}>
            <h1>{user}</h1>
            <button onClick={() => handleAccept(user._id)}>Accept the Request</button>
          </li>
        ))}
        </div>
    );
}