import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useCookies } from "react-cookie";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const response = fetch("http://localhost:3001/api/users/logout", {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      navigate("/login");
    } else {
      console.error(response.error);
      return;
    }
  });
};

export default Logout;
