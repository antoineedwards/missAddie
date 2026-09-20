import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Administrators } from "./pages/Administrators";
import { Eligibility } from "./pages/Eligibility";
import { Home } from "./pages/Home";
import { Principles } from "./pages/Principles";
export default function App() { return <BrowserRouter><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/principles" element={<Principles/>}/><Route path="/administrators" element={<Administrators/>}/><Route path="/eligibility" element={<Eligibility/>}/></Routes><Footer/></BrowserRouter>; }
