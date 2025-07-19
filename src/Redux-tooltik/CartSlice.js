import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  cartItemId: []
}


export const CartSlice = createSlice({
  name: 'cart_id',
  initialState: globalState,
  reducers: {
    cartId: (state, action) => {
      const newItem = action.payload;

      // Check if item with same cartId already exists
      const alreadyInCart = state.cartItemId.some(item => item.cartId === newItem.cartId);

      if (!alreadyInCart) {
        state.cartItemId.push(newItem);
      }
    },
  },
})



// Action creators are generated for each case reducer function
export const { cartId } = CartSlice.actions

export default CartSlice.reducer
