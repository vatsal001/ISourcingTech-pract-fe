import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Users/Login";
import RegisterUser from "./components/Users/RegisterUser";
import UserDashboard from "./components/Users/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<UserDashboard />} path="/users" />
        <Route element={<RegisterUser />} path="/registeruser" />
      </Routes>
    </Router>
  );
}

export default App;
