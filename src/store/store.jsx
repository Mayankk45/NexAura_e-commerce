import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import productSlice from "./productslice";
import cartSlice from "./cartslice";

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,
    },
});
