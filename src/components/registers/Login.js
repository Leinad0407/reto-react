import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
      }
    }
  };

  const handleGoogleSignin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail"
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
      <button onClick={handleGoogleSignin}>Loging with Google</button>
    </div>
  );
}
