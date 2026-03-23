import React from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../../components/PostList'

const Tag = () => {
    const { tag } = useParams()
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tag: {tag}</h1>
            <PostList filter="tag" type={tag} />
        </>
    )
}

export default Tag