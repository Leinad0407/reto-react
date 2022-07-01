import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/registers/Home";
import { Login } from "./components/registers/Login";
import { Register } from "./components/registers/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/registers/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
