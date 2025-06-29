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

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        let res = await axios.get(
            `users?email=${user.email}&password=${user.password}`
        );
        let loginUser = res.data;
        if (loginUser.length > 0) {
            toast.success("Login Successfully 😀");
            localStorage.setItem("user", JSON.stringify(loginUser));
            dispatch(loaduser(loginUser));
            return true;
        } else {
            toast.error("user not found ☹️, please register");
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
