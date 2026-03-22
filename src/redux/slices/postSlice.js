import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getEnv } from "../../utils/env";
export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        action:'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending,(state,action)=>{
            state.action='pending'
        })
        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.action='fulfilled'
            state.posts=action.payload.articles
        })
        builder.addCase(getPosts.rejected,(state,action)=>{
            state.action='rejected'
        })
    }

})
export const getPosts = createAsyncThunk('post/getPosts', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}/everything?q=tesla&from=2026-02-22&sortBy=publishedAt&apiKey=${getEnv('VITE_API_KEY')}`)
        if(res.status!==200){
            rejectWithValue('Error fetching posts')
        }
        const data = await res.data
        console.log(data);
        return data;
    } catch (error) {
        console.log("ERROR:", error);
        return rejectWithValue(error.message)
    }
})