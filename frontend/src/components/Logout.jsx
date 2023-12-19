import React, { useState } from "react";
import { Navigate } from "react-router-dom";
//import { useCookies } from "react-cookie";

const Logout = async () => {
  const response = await fetch("http://localhost:3001/users/logout", {
    method: "POST",
    credentials: "include",
  });
  if (response.ok) {
    return <Navigate to="/" />;
  } else {
    return;
    console.error(response.error);
  }
};

export default Logout;
