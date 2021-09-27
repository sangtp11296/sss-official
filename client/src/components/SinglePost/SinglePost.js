import React, { useContext, useEffect, useState } from 'react'
import PostContainer from '../Layout/PostContainer/PostContainer'
import CoverTitle from '../Layout/CoverTitle/CoverTitle'
import styles from './SinglePost.module.css'
import { useLocation, withRouter } from 'react-router'
import axios from 'axios'
import { Context } from '../../context/Context'

function SinglePost(props) {
    props.setWhiteHeaderCallback(false);
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const [post,setPost] = useState([{}]);
    const {user} = useContext(Context)
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('/posts/' + slug);
            setPost(res.data);
        }
        getPost();
    },[slug])
    const editCallBackFunction = (editData) => {
        if(editData){
            props.history.push(`/edit`,{state:post[0]})
        }
    }
    const deleteCallBackFunction = async (deleteData) => {
        if(deleteData){
            try{
                await axios.delete(`/posts/${post[0]._id}`,{data:{username:user.username}})
                window.location.replace('/')
            } catch(err){}
        }
    }
    return (
        <div className={styles.singlePost}>
            <CoverTitle postCover={post[0]}/>
            <PostContainer postContent={post[0].content} editCallBackProp={editCallBackFunction} deleteCallBackProp={deleteCallBackFunction}/>
        </div>
    )
}

export default withRouter(SinglePost)