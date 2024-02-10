import { BrowserRouter, Route, Routes } from "react-router-dom";
import GloablStyles from "./styles/GlobalStyles";
import Home1 from "./pages/Home1";
import Integrations from "./pages/Integrations";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home2 from "./pages/Home2";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import HeadlessCheckout from "./pages/HeadlessCheckout";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import Jamstack from "./pages/Jamstack";
import Frameworks from "./pages/Frameworks";
import HeadlessCommerce from "./pages/HeadlessCommerce";
import CommerceApi from "./pages/CommerceApi";
import { NavProvider } from "./context/NavContext";

export default function App() {
  return (
    <NavProvider>
      <GloablStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home1 />} />
            <Route path="/developers" element={<Home2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-commercejs-works" element={<HowItWorks />} />
            <Route path="/headless-checkout" element={<HeadlessCheckout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/features" element={<Features />} />
            <Route path="/jamstack" element={<Jamstack />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/headless-commerce" element={<HeadlessCommerce />} />
            <Route path="/commerce-api" element={<CommerceApi />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </NavProvider>
  );
}
