import axios from "../api/axiosconfig";
import { loadproduct } from "./productslice";

export const asyncCreateProduct = (data) => async (dispatch, getState) => {
    try {
        let res = await axios.post("/products", data);
        dispatch(asyncGetProduct());
        return true;
    } catch (error) {
        console.log("unable to add product");
        return false;
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

export const asyncUpdateProduct = (product) => async (dispatch, getState) => {
    try {
        let res = await axios.patch(`/products/${product.id}`, product);
        dispatch(asyncGetProduct());
    } catch (error) {
        console.log("unable to update data", error);
    }
};

export const asyncDeleteProduct = (prodId) => async (dispatch, getState) => {
    try {
        let res = await axios.delete(`/products/${prodId}`);
        dispatch(asyncGetProduct());
        return true;
    } catch (error) {
        console.log("unable to delete");
        return false;
    }
};
