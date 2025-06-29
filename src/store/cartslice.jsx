import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        loadcart: (state, action) => {},
    },
});

export default cartSlice.reducer;
export const { loadcart } = cartSlice.actions;
