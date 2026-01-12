import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Users from "../pages/users";
import ProfilePage from "../pages/Profile";

function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<Users />} />
        <Route path="/user/:id" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default ProjectRoutes;
