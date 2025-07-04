import Pagenotfound from "./Pagenotfound";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Userlogin from "./pages/user/Userlogin";
import Usersignup from "./pages/user/Usersignup";
import Adminlogin from "./pages/admin/Adminlogin";
import Createproduct from "./pages/admin/Createproduct";
import Products from "./pages/Products";
import Productdetail from "./pages/Productdetail";
import Cart from "./pages/Cart";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-login" element={<Userlogin />} />
            <Route path="/user-signup" element={<Usersignup />} />

            <Route path="/admin-login" element={<Adminlogin />} />
            <Route
                path="/admin/create-product/:id"
                element={<Createproduct />}
            />

            <Route path="/product_explore" element={<Products />} />
            <Route path="/product_details/:id" element={<Productdetail />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<Pagenotfound />} />
        </Routes>
    );
};

export default Mainroutes;
