import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, selectAllPosts, selectStatus } from '../../redux/slices/postSlice'
import CardItem from '../../components/CardItem'
import SearchForm from '../../components/SearchForm'
const Home = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)   
    const status = useSelector(selectStatus)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    if(status==='rejected'){
        return <h1>Error fetching posts</h1>
    }
    return (
        <>
            <h1 style={{textAlign:'center'}}>BLOG</h1>

            <SearchForm />
            <Grid container spacing={2}>
                {status==='pending' ? <h1>Loading...</h1> : posts.map((post, index) => (
                    <CardItem key={index} post={post} />
                ))}

            </Grid>
        </>
    )
}

export default Home