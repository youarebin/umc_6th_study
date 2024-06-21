import {createSlice} from '@reduxjs/toolkit'

const initialState = { 
    isModalOpen : false,
};

export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers : {
        openModal : (state, action) =>{
            state.isModalOpen = true
        },
        closeModal : (state) => {
            state.isModalOpen = false
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions
export const selectModal = (state) => state.modal

export default modalSlice.reducer