import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} /> 
    </Routes>
    </BrowserRouter>
  )
}