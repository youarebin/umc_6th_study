import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../cartItems';

const initialState = { 
    cart: cartItems, //초기 데이터로 설정
    totalPrice: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name:'cartCounter',
    initialState,
    reducers : {
        increase : (state, action) => {
            const item = state.cart.find(e => e.id === action.payload)
            item.amount++
        },
        decrease : (state, action) => {
            const item = state.cart.find(e => e.id === action.payload)
            if(item.amount > 1){
                item.amount--
            }else{
                state.cart = state.cart.filter(e => e.id !== action.payload);
            }
        },
        removeItem : (state, action) => {
            state.cart = state.cart.filter(e => e.id !== action.payload);
        },
        clearCart : (state, action) =>{
            state.cart = [];
            state.totalPrice = 0;
            state.totalAmount = 0;
        },
        calculateTotals : (state, action) => {
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.amount, 0);
            state.totalAmount = state.cart.reduce((total, item) => total + item.amount, 0);
        }
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions
export default cartSlice.reducer