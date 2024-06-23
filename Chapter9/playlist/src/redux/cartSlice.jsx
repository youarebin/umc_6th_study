import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems', 
    async (payload, thunkAPI) => {
    try{
         const {data} = await axios.get('http://localhost:8080/musics'); // API주소
         return thunkAPI.fulfillWithValue(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
  });

const initialState = { 
    cart: [], //초기 데이터로 설정 -> 빈 배열
    totalPrice: 0,
    totalAmount: 0,
    isLoading: false,
    error: null,
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
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCartItems.pending, (state) => {//비동기 작업 시장되었음을 나타내는 상태, 데이터 가져오는 중
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchCartItems.fulfilled, (state, action) => {//비동기 작업 성곡적으로 작업 완료, 데이터 처리 가능
            state.isLoading = false;
            //state.cart.push(action.payload);//cart에 받은 데이터 넣기(cartItems)
            state.cart = action.payload
          })
          .addCase(fetchCartItems.rejected, (state, action) => {//비동기 작업 실패, 오류 처리
            state.isLoading = false;
            state.error = action.error.message;
            alert(action.payload)
          });
      },
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions
export default cartSlice.reducer