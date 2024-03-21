import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  const params = useParams();
  console.log(params);
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile</h1>
      </main>
    </>
  );
};

export default UserProfile;