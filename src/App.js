import logo from "./logo.svg";
import "./App.css";
import Routess from "./Routes";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.email);
      } else {
        setUser(null);
      }
      console.log(currentUser);
    });
  }, []);
  // return <SignIn />;
  // return <SignUp />;
  // return <UserProfile />;
  return (
    <div>
      <h3>User : {user}</h3>
      <p></p>
      <a href="/login">Login in</a>
      <p></p>
      <a href="/signup">Sign in</a>
      <p></p>
      <a href="/profile">User Profile</a>
      <p></p>
      <LogoutButton />
      <p></p>
      <Routess />;
    </div>
  );
}

export default App;
