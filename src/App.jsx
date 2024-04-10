// import { useState } from 'react'
import FormPage from "../src/pages/Formpage/Index";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/components/Index/Index";
import AdminBoard from "./pages/AdminBoard/AdminBoard_Route/Admin";
import SignupConfirmation from "./pages/signupConfirmation/Index";
import EventManagement from "./pages/AdminBoard/EventManagement/Index";
import CampusManagement from "./pages/AdminBoard/CampusManagement/Index";
import Department from "./pages/AdminBoard/Department/Index";
import Minister from "./pages/AdminBoard/Minister/Index";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import AboutUsPage from "./pages/AboutUsPage/Components/Index/Index";
import SermonPage from "./pages/Media/Sermon";
import Gallery from "./pages/Media/Gallery/Index";
import Give__to_church from "./pages/Give/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<FormPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/give" element={<Give__to_church />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/media/sermon" element={<SermonPage />} />
        <Route path="/media/gallery" element={<Gallery />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminBoard />} />
          <Route path="/admin/event" element={<EventManagement />} />
          <Route path="/admin/campus" element={<CampusManagement />} />
          <Route path="/admin/department" element={<Department />} />
          <Route path="/admin/minister" element={<Minister />} />
        </Route>
        <Route path="/private" element={<PrivateRoute />} />
        <Route path="/confirmation" element={<SignupConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
