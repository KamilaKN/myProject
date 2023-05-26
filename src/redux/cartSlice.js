import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantityCart: 0,
        postsCart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const indexPost = state.postsCart.findIndex(
                (post) => post.id === action.payload.id
            );
            if (indexPost == -1) {
                state.quantityCart++;
                state.postsCart.push(action.payload);
             } //else { //нужно сделать модальное окно такой обект уже есть 
            //      state.postsCart[indexPost].quantyti += action.payload.quantyti
            // }
        },
        deletePostCart: (state,action ) => {
           state.postsCart = state.postsCart.filter((p) => p.id !== action.payload)

        }
    },
});

export const { addToCart, deletePostCart } = cartSlice.actions;
export default cartSlice.reducer;
