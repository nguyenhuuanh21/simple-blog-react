import { Box, Button, Link } from '@mui/material'
import LinkBehavior from '../../components/LinkBehavior'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, selectPost, selectStatus } from '../../redux/slices/postSlice'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useState(() => {
    dispatch(getPost(id))
  }, [dispatch])
  const post = useSelector(selectPost)
  const status = useSelector(selectStatus)
  if (status === 'rejected') {
    return <h1>Error loading post</h1>
  }
  if (status === 'pending') {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <Box sx={{ paddingBlock: 1, display: 'flex', gap: 1 }}>
        <span>post by : <Link color='inherit' style={{textDecoration:"none"}} href={`/author/${post?.user?.id}`}>{post?.user?.username}</Link></span>
        <span>Views : {post.views || 0}</span>
      </Box>
      <Box sx={{ paddingBlock: 2 }}>
        <p>{post.body}</p>
      </Box>
      <Button component={LinkBehavior} to="/" variant='outlined' color='primary' >Back to home</Button>
    </div>
  )
}

export default Post