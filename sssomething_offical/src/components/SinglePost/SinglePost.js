import React, { useEffect, useState } from 'react'
import PostContainer from '../Layout/PostContainer/PostContainer'
import CoverTitle from '../Layout/CoverTitle/CoverTitle'
import styles from './SinglePost.module.css'
import { useLocation } from 'react-router'
import axios from 'axios'

export default function SinglePost(props) {
    props.setWhiteHeaderCallback(false);
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const [post,setPost] = useState([{}]);
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('/posts/' + slug);
            setPost(res.data);
        }
        getPost();
    },[slug])
    console.log(post[0].content);
    return (
        <div className={styles.singlePost}>
            <CoverTitle postCover={post[0]}/>
            <PostContainer postContent={post[0].content}/>
        </div>
    )
}
