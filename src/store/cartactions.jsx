import axios from "../api/axiosconfig";
import { loadCart } from "./cartslice";
import { toast } from "react-toastify";

export const asyncAddProduct = (cartItem) => async (dispatch, getState) => {
    let userData = JSON.parse(localStorage.getItem("user") || "[]");
    let userId = userData[0]?.id;
    if (!userId) {
        toast.warning("Login to access the resorce");
        return;
    }
    try {
        let res = await axios.get(`/cart?userId=${userId}`);

        if (res.data.length > 0) {
            // Existing cart
            let existingCart = res.data[0]; // whole cart object
            let productList = existingCart.product;

            let existingProductIndex = productList.findIndex(
                (item) => item.productId === cartItem.productId
            );

            if (existingProductIndex > -1) {
                // Increase quantity of existing product
                productList[existingProductIndex].quantity += 1;
            } else {
                // Add new product to cart
                productList.push({ ...cartItem });
            }

            // PATCH by cart.id not userId
            let updatedCart = {
                ...existingCart,
                product: productList,
            };

            let patchRes = await axios.patch(
                `/cart/${existingCart.id}`,
                updatedCart
            );
            dispatch(loadCart([patchRes.data]));
        } else {
            // Cart doesn't exist, create new cart
            const cartData = {
                userId,
                product: [{ ...cartItem }],
            };

            let postRes = await axios.post("/cart", cartData);
            dispatch(loadCart([postRes.data]));
        }
        toast.success("Product added to cart");
        return true;
    } catch (error) {
        console.log("Cart error:", error);
        return false;
    }
};

export const asyncGetCart = (product) => async (dispatch, getState) => {
    try {
        let res = await axios.get("/cart");
        dispatch(loadCart(res.data));
    } catch (error) {
        console.log("unable to add product", error);
    }
};

export const asyncDecreaseProduct = (product) => async (dispatch, getState) => {
    try {
        let userData = JSON.parse(localStorage.getItem("user") || "[]");
        let userId = userData[0]?.id;

        let getRes = await axios.get(`/cart?userId=${userId}`);

        let cart = getRes.data[0];
        let products = cart.product;

        let productIndex = products.findIndex(
            (prd) => prd.productId === product.productId
        );

        if (productIndex > -1 && products[productIndex].quantity > 1) {
            products[productIndex].quantity -= 1;

            let updatedData = {
                ...cart,
                product: products,
            };

            let patchRes = await axios.patch(`/cart/${cart.id}`, updatedData);
            dispatch(loadCart([patchRes.data]));
        }
    } catch (error) {
        console.log("unable to decrease cart product", error);
    }
};

export const asyncDeleteItemfromCart =
    (product) => async (dispatch, getState) => {
        let userData = JSON.parse(localStorage.getItem("user") || "[]");
        let userId = userData[0]?.id;
        try {
            let res = await axios.get(`/cart?userId=${userId}`);

            let cart = res.data[0];
            let products = cart.product;

            let prdIndex = products.findIndex(
                (prd) => prd.productId === product.productId
            );

            if (prdIndex > -1) {
                products.splice(prdIndex, 1);

                let updatedCart = {
                    ...cart,
                    product: products,
                };

                let patchRes = await axios.patch(
                    `/cart/${cart.id}`,
                    updatedCart
                );

                dispatch(loadCart([patchRes.data]));
                toast.success("Product removed from cart");
            }
        } catch (error) {
            console.log("unable to delete from cart", error);
        }
    };
