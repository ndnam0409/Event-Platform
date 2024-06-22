import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email:'',
    phone:'',
    address: '',
    error: '',
    avatar:''
  };

  const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        updateName(state,action){
            state=action.payload;
        },
    }

  })

  export const {updateName}=userSlice.actions;

  export default userSlice.reducers