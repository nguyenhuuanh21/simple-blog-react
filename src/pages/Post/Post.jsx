import { Box, Button, Link } from '@mui/material'
import LinkBehavior from '../../components/LinkBehavior'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, selectPost, selectStatus, selectTags } from '../../redux/slices/postSlice'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
const Post = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useState(() => {
    dispatch(getPost(id))
  }, [dispatch])
  const post = useSelector(selectPost)
  const status = useSelector(selectStatus)
  const tags = useSelector(selectTags)
  if (status === 'rejected') {
    return <Error />
  }
  if (status === 'pending') {
    return <Loading />
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <Box sx={{ paddingBlock: 1, display: 'flex', gap: 1 }}>
        <span>post by : <Link color='inherit' style={{ textDecoration: "none" }} href={`/author/${post?.user?.id}`}>{post?.user?.username}</Link></span>
        <span>Views : {post.views || 0}</span>
      </Box>
      <Box sx={{ paddingBlock: 2 }}>
        <p>{post.body}</p>
        {tags.length > 0 && (<Box sx={{ marginBottom: 2 }}>
          Tags : {" "}
          {tags.map((tag, index) => (
            <Button key={index} size='small' variant='outlined' color='primary' sx={{ marginRight: 1 }}>
              {tag}
            </Button>
          ))}
          <Button size='small' variant='outlined' color='primary' >Back to home</Button>
        </Box>)}
        <Box sx={{display:"flex" ,flexDirection:"row",gap:3,marginBottom:3}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThumbUpIcon color='primary' /> {post.reactions.likes || 0}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThumbDownAltIcon color='primary' /> {post.reactions.dislikes || 0}
          </Box>
          <Box />

        </Box>
        <Button component={LinkBehavior} to="/" variant='outlined' color='primary' >Back to home</Button>

      </Box>
    </div>
  )
}

export default Post