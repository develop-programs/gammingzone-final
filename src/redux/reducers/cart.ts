import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddtoCart: (state, action) => {
        }
    }
})


export const {AddtoCart} = cartSlice.actions
export default cartSlice.reducer