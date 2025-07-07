import { lazy } from "react";
import { Route, Routes } from "react-router";
const Pagenotfound = lazy(() => import("./Pagenotfound"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
const Userlogin = lazy(() => import("./pages/user/Userlogin"));
const Usersignup = lazy(() => import("./pages/user/Usersignup"));
const Adminlogin = lazy(() => import("./pages/admin/Adminlogin"));
const Createproduct = lazy(() => import("./pages/admin/Createproduct"));
const Products = lazy(() => import("./pages/Products"));
const Productdetail = lazy(() => import("./pages/Productdetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Authwrapper = lazy(() => import("./pages/Authwrapper"));
const Checkout = lazy(() => import("./pages/Checkout"));

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
            <Route
                path="/cart"
                element={
                    <Authwrapper>
                        <Cart />
                    </Authwrapper>
                }
            />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<Pagenotfound />} />
        </Routes>
    );
};

export default Mainroutes;
