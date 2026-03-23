import React, { useEffect } from 'react'
import PostList from '../../components/PostList'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectUser } from '../../redux/slices/userSlice'
import { useParams } from 'react-router-dom'
import { selectStatus } from '../../redux/slices/postSlice'
import Error from '../../components/Error'
import PropTypes from 'prop-types'
const Author = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const status = useSelector(selectStatus)
    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])
    if (status === 'rejected') {
        return <Error />
    }
    
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Author : {user?.username}</h1>
            <PostList filter="user" type={id} />
        </>
    )
}
Comment.propTypes = {
    filter: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired
}
export default Author