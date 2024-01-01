import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useCookies } from "react-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const fetchLogout = async () => {
    await fetch("http://localhost:3001/api/users/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const response = fetchLogout();
    // console.log("response received from logout", response);
    // if (response.status === 200) {
    navigate("/login");
    //  return;
    // } else {
    //   console.error(response.error);
    //   return;
    // }
  });
};

export default Logout;
