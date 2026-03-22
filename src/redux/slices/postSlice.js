import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getEnv } from "../../utils/env";
export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post:{},
        status:'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending,(state,action)=>{
            state.status='pending'
        })
        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.posts=action.payload
        })
        builder.addCase(getPosts.rejected,(state,action)=>{
            state.status='rejected'
        })
           builder.addCase(getPost.pending,(state,action)=>{
            state.status='pending'
        })
        builder.addCase(getPost.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.post=action.payload
        })
        builder.addCase(getPost.rejected,(state,action)=>{
            state.status='rejected'
        })
    }

})
export const getPosts = createAsyncThunk('post/getPosts', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}/posts`)
        if(res.status!==200){
            rejectWithValue('Error fetching posts')
        }
        const data = await res.data.posts        
        return data;
    } catch (error) {
        console.log("ERROR:", error);
        return rejectWithValue(error.message)
    }
})
export const getPost = createAsyncThunk('post/getPost', async (postId, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}/posts/${postId}`)
        if(res.status!==200){
            rejectWithValue('Error fetching posts')
        }
        const data = await res.data
        const response = await axios.get(`${getEnv('VITE_SERVER_API')}/users/${data.userId}`)
        if(response.status!==200){
                rejectWithValue('Error fetching user')
        }
        data.user = response.data;
        console.log(data);
        
        return data;
    } catch (error) {
        console.log("ERROR:", error);
        return rejectWithValue(error.message)
    }
})
export const selectAllPosts = (state) => state.post.posts

export const selectStatus = (state) => state.post.status
export const selectPost=(state)=>state.post.post