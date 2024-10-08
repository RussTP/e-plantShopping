import { createSlice } from '@reduxjs/toolkit';
const handleAddToCart = (product) => {
    dispatchEvent(addItem(product));
    setAddedtoCart((prevState) => ({
        ...prevState,
        [product.name]: true, //set the product name as key and value as true to indicate it's added to cart
    }));
};
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
