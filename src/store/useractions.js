import axios from "../api/axiosconfig";
import { loaduser } from "./userslice";
import { toast } from "react-toastify";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        let res = await axios.post("/users", user);
        dispatch(createUser(res.data));
        toast.success("User Registered Successfully 😀", {
            position: "top-center",
            autoClose: 2000,
        });
    } catch (error) {
        console.log("unable to post user !!!");
    }
};

export const asyncLoginUser = (user, isAdmin) => async (dispatch, getState) => {
    try {
        let res = await axios.get(
            `users?email=${user.email}&password=${user.password}`
        );
        let loginUser = res.data;
        if (loginUser.length > 0) {
            if (isAdmin) toast.success("Admin Login Successfully");
            else toast.success("Login Successfully");
            localStorage.setItem("user", JSON.stringify(loginUser));
            dispatch(loaduser(loginUser));
            return true;
        } else {
            if (isAdmin)
                toast.error("unable to login, wrong email or password");
            else toast.error("user not found, please register");
            return false;
        }
    } catch (error) {
        console.log("unable to get user!!!");
        return false;
    }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
    localStorage.removeItem("user");
    dispatch(loaduser(null));
};
