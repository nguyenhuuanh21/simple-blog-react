import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getEnv } from "../../utils/env";
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.user = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
});
export const getUser = createAsyncThunk('user/getUser', async (userId, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}/users/${userId}`)
        if (res.status !== 200) {
            return rejectWithValue('Error fetching user')
        }
        console.log('user',res.data);
        
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const selectUser = (state) => state.user.user
export const selectStatus = (state) => state.user.status