import { Grid, Pagination } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByTag, getPostByUser, getPosts, selectAllPosts, selectPostCount, selectStatus } from '../redux/slices/postSlice'
import CardItem from './CardItem'
import SearchForm from './SearchForm'
import Loading from './Loading'
import Error from './Error'
import { getEnv } from '../utils/env'
import { useSearchParams } from 'react-router-dom'
import NotFound from './NotFound'
import PropTypes from 'prop-types'
const PostList = ({ filter, type }) => {
    const [searchParams, setSearchParams] = useSearchParams("")
    const page = Number(searchParams.get("page")) || 1
    const keyword = searchParams.get("keyword") || ""
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const status = useSelector(selectStatus)
    const postCount = useSelector(selectPostCount)
    
    const handleChangePage = (event, value) => {
        const params = Array.from(searchParams.entries()).reduce((prev, current) => {
            const [key, value] = current
            if (!prev[key]) {
                prev[key] = value
            } else {
                if (!Array.isArray(prev[key])) {
                    prev[key] = [prev[key]]
                }
                prev[key].push(value)
            }
            return prev
        }, {})
        if (filter === "user") {
            setSearchParams({ ...params, page: value })
            dispatch(getPostByUser({userId: type, skip: (page - 1) * getEnv('VITE_LIMIT')}))
        }else if(filter === "tag"){
            setSearchParams({ ...params, page: value })
            dispatch(getPostByTag({tag: type, skip: (page - 1) * getEnv('VITE_LIMIT')}))
        } else {
            setSearchParams({ ...params, page: value })

        }
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    useEffect(() => {
        const skip = page * getEnv('VITE_LIMIT') - getEnv('VITE_LIMIT')
        if (filter === "user") {
            dispatch(getPostByUser({userId: type, skip: skip}))
        } else if (filter === "tag") {
            dispatch(getPostByTag({tag: type, skip: skip }))
        } else {
            dispatch(getPosts({ keyword: keyword, skip: skip }))

        }
    }, [dispatch, page, keyword])
    if (status === 'rejected') {
        return <Error />
    }

    return (
        <>
            {filter !== "user" && filter !== "tag" && <SearchForm />}
            {posts.length ? <Grid container spacing={2}>
                {status === 'pending' ? <Loading type='spinner' /> : posts.map((post, index) => (
                    <CardItem key={index} post={post} />
                ))}
                <Grid size={12}>
                    <Pagination page={page} onChange={handleChangePage} boundaryCount={3} count={Math.ceil(postCount / getEnv('VITE_LIMIT'))} color="primary" sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, marginBottom: 3 }} />
                </Grid>
            </Grid> : <NotFound />}

        </>
    )
}

export default PostList