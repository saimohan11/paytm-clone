import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
// import { Navbar } from "./pages/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} /> 
      <Route path="/send" element={<SendMoney/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}