import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: null,
};

let userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            if (action.payload != null) state.user = action.payload[0];
            else state.user = null;
        },
    },
});

export default userSlice.reducer;
export const { loaduser } = userSlice.actions;
