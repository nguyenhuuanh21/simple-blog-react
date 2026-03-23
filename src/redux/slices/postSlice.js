import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getEnv } from "../../utils/env";
export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post: {},
        status: 'idle',
        postCount: 0,
        tags:[]
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload.posts
            state.postCount = action.payload.total
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.status = 'rejected'
        })
        builder.addCase(getPost.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.post = action.payload
            state.tags = action.payload.tags

        })
        builder.addCase(getPost.rejected, (state, action) => {
            state.status = 'rejected'
        })
        builder.addCase(getPostByUser.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getPostByUser.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload.posts
            state.postCount = action.payload.total
        })
        builder.addCase(getPostByUser.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }

})
export const getPosts = createAsyncThunk('post/getPosts', async ({ keyword = "", skip = 0 }, { rejectWithValue }) => {
    try {
        const params = {
            q: keyword,
            limit: getEnv('VITE_LIMIT'),
            skip: skip
        }
        let path = '/posts'
        if (keyword) {
            path = '/posts/search'
        }
        let queryString = `?${new URLSearchParams(params).toString()}`
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}${path}${queryString}`)
        if (res.status !== 200) {
            return rejectWithValue('Error fetching posts')
        }
        const data = await res.data
        console.log(data);

        return data;
    } catch (error) {
        console.log("ERROR:", error);
        return rejectWithValue(error.message)
    }
})
export const getPost = createAsyncThunk('post/getPost', async (postId, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}/posts/${postId}`)
        if (res.status !== 200) {
            return rejectWithValue('Error fetching posts')
        }
        const data = await res.data
        const response = await axios.get(`${getEnv('VITE_SERVER_API')}/users/${data.userId}`)
        if (response.status !== 200) {
            return rejectWithValue('Error fetching user')
        }
        data.user = response.data;
        console.log(data);

        return data;
    } catch (error) {
        console.log("ERROR:", error);
        return rejectWithValue(error.message)
    }
})
export const getPostByUser = createAsyncThunk('post/getPostByUser', async (userId, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${getEnv('VITE_SERVER_API')}/users/${userId}/posts`)
        if (res.status !== 200) {
            return rejectWithValue('Error fetching posts')
        }
        const data = await res.data
        console.log(data);
        return data;

    } catch (error) {
        console.log("ERROR:", error);
        return rejectWithValue(error.message)
    }
})
export const selectAllPosts = (state) => state.post.posts
export const selectTags = (state) => state.post.tags

export const selectStatus = (state) => state.post.status
export const selectPost = (state) => state.post.post
export const selectPostCount = (state) => state.post.postCount