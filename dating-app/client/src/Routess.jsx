import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";
import HomePage from "./HomePage";
import { BrowserRouter,Routes, Route } from "react-router-dom";
//console.log("hi3afs");
export default function Routess() {
    // console.log("hi35");
    const {username,id}= useContext(UserContext);
    
    if(username){
        //console.log("hehehe");
        return (
        <HomePage/>
        
        ); 
    }

    return(
        <RegisterAndLoginForm/>
    ); 
}
//2:12:02