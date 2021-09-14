import React, { useEffect, useState } from 'react'
import PostContainer from '../Layout/PostContainer/PostContainer'
import CoverTitle from '../Layout/CoverTitle/CoverTitle'
import styles from './SinglePost.module.css'
import { useLocation } from 'react-router'
import axios from 'axios'

export default function SinglePost(props) {
    props.setWhiteHeaderCallback(false);
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post,setPost] = useState({});
    console.log(path)
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            
            setPost(res.data);
        }
        getPost();
    },[path])
    return (
        <div className={styles.singlePost}>
            <CoverTitle postCover={post}/>
            <PostContainer/>
        </div>
    )
}
