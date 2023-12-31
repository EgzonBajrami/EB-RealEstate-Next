"use client"
import {createSlice} from '@reduxjs/toolkit'
let storedData = null;
if (typeof window !== 'undefined') {
 storedData = localStorage.getItem('real_token');
}
const data = storedData ? JSON.parse(storedData) : null;

interface AuthState {
  data: string | null;
}

const initialState: AuthState = {
    data,
  };

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            localStorage.setItem('real_token',JSON.stringify(action.payload))
            state.data = action.payload
        },
        logout:(state) =>{
            localStorage.removeItem('real_token');
            state.data = null;
        }
    }
})
export const {login, logout} = authSlice.actions
export default authSlice.reducer