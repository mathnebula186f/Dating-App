import { func } from "prop-types";
import { useContext,useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";


export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name ,setName]=useState("");
  const [about,setAbout]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [imgUrl,setImgUrl]=useState("");
  const[isLoginOrRegister,setIsLoginOrRegister]=useState('register');
  const {setUsername : setLoggedInUsername,setId}=useContext(UserContext);
  async function handleSubmit(ev){
    ev.preventDefault();
    const url= isLoginOrRegister==='register' ? '/register':'/login';
    if(isLoginOrRegister==='register'){
      const { data } = await axios.post(url, {
        username,
        password,
        name,
        age,
        gender,
        imgUrl,
        about,
      });
      setLoggedInUsername(username);
      setId(data.id);
    }
    else{
      const { data } = await axios.post(url, {
        username,
        password,
      });
      setLoggedInUsername(username);
      setId(data.id);
    }
    
    
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        {isLoginOrRegister === "register" && (
          <div>
            <input
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              type="text"
              placeholder="name"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
            <input
              value={about}
              onChange={(ev) => setAbout(ev.target.value)}
              type="text"
              placeholder="about"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
            <input
              value={age}
              onChange={(ev) => setAge(ev.target.value)}
              type="text"
              placeholder="age"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
            <input
              value={imgUrl}
              onChange={(ev) => setImgUrl(ev.target.value)}
              type="text"
              placeholder="imgUrl"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
            <input
              value={gender}
              onChange={(ev) => setGender(ev.target.value)}
              type="text"
              placeholder="gender"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
          </div>
        )}
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === "register" ? "Register" : "login"}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?
              <button onClick={() => setIsLoginOrRegister("login")}>
                Login Here
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Dont Have an Account?
              <button onClick={() => setIsLoginOrRegister("register")}>
                Register Here
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
