import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./Pages/CourseList";
import Navbar from "./Components/Navbar";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import UserRegister from "./Pages/UserRegister";
import CourseDetailsPage from "./Pages/CourseDetailsPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route
            path="/courseDetailsPage/:courseId"
            element={<CourseDetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
