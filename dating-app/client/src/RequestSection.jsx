import { useEffect, useState } from "react";

export default function RequestSection() {
    const [requestList, setRequestList] = useState([]);
    const {username,id}=useContext(UserContext);
    useEffect(() => {
        axios.get('/fetchRequests',id ).then(response => {
            setRequestList(response.data);
        })}
        ,[]);

    return (
        <div>
            {requestList.map((user) => (
          <li key={user._id}>
            <h1>{user.username}</h1>
            <button onClick={() => handleAccept(user._id)}>Accept the Request</button>
          </li>
        ))}
        </div>
    );
}