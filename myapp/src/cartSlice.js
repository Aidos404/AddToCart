import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
	name: 'cart',
	initialState: { cart: [] },
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload)
		},
		removeFromCart: (state, action) => {
			const index = state.cart.findIndex(
				(item) => item.id === action.payload.id
			)
			if (index !== -1) {
				state.cart.splice(index, 1)
			}
		},
	},
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
