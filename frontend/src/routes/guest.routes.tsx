import { Route, Routes } from "react-router-dom";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

export function GuestRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
   );
}
