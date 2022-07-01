// import { useContext } from "react";
// import { context } from "../../context/authContext";

import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;

  //  const authContext = useContext(context);
  console.log(user);
  return (
    <div>
      Welcome {user.displayName || user.email}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
