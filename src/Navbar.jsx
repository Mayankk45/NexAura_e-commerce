import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "./store/useractions";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.userReducer.user);

    const [showDropdown, setShowDropdown] = useState(false);

    const handleLoginClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (type) => {
        setShowDropdown(false);
        if (type === "admin") {
            navigate("/admin-login");
        } else {
            navigate("/user-login");
        }
    };

    const handleLogoutClick = () => {
        navigate("/");
        dispatch(asyncLogoutUser());
        toast.success("Logout Successfully");
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <nav className="navbar">
            <div className="navbar__center">
                <div className="navbar__logo">MySite</div>
                <ul className="navbar__links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    {currentUser?.isAdmin && (
                        <li>
                            <NavLink to="/admin/create-product/''">
                                Create-Product
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>

            {currentUser === null ? (
                <div className="navbar__login-container">
                    <button
                        className="navbar__login"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>

                    {showDropdown && (
                        <div className="navbar__dropdown">
                            <div onClick={() => handleOptionClick("user")}>
                                User
                            </div>
                            <div onClick={() => handleOptionClick("admin")}>
                                Admin
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <FaShoppingCart
                        onClick={handleCartClick}
                        className="cartIcon"
                        size={24}
                    />
                    <div className="navbar_logout" onClick={handleLogoutClick}>
                        Logout
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
