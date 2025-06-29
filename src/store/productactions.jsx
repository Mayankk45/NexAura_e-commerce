import axios from "../api/axiosconfig";
import { loadproduct } from "./productslice";

export const asyncCreateProduct = (data) => async (dispatch, getState) => {
    try {
        let res = await axios.post("/products", data);
        dispatch(asyncGetProduct());
    } catch (error) {
        console.log("unable to add product");
    }
};

export const asyncGetProduct = () => async (dispatch, getState) => {
    try {
        let res = await axios.get("/products");
        dispatch(loadproduct(res.data));
    } catch (error) {
        console.log("unable to add product");
    }
};
