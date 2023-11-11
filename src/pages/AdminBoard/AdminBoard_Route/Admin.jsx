import { Route, Routes } from "react-router-dom";
import DashBoard from "../Management/control__panel/Index";
import './Admin.css'



const Admin = () => {
  return (
    <>
        <Routes>
            <Route path="/" Component={DashBoard} />
        </Routes>
    </>
  )
}

export default Admin;