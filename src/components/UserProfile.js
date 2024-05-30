// src/components/UserProfile.js
import React, { useEffect, useState } from "react";
import { client } from "../sanity";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import LogoutButton from "../components/LogoutButton";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log(currentUser);
        fetchUserData(currentUser);
      }
    });
  }, []);

  const fetchUserData = async (user) => {
    const query = `*[_type == "user"]`;
    // const params = { userId };
    const data = await client.fetch(query);
    console.log(user);
    data.forEach((i) => {
      if (i.email == user.email) {
        console.log(i.email, user.email);
        setUserData(i);
        console.log("hogya");
      }
    });
    return;
  };

  if (!user) {
    return <p>Please sign in</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <p>Name: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>Points: {userData.points}</p>
          <LogoutButton />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
