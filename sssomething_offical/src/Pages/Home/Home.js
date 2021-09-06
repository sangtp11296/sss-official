import React, {useState,useEffect} from 'react'
import HomeContainer from '../../components/Layout/HomeContainer/HomeContainer'
import HomeCover from '../../components/Layout/HomeContainer/HomeCover'
import './Home.module.css'
import axios from 'axios'

export default function Home() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts')
            setPosts(res.data);
        }
        fetchPosts();
    }, [])
    return (
        <div className="en-lang" lang="en">
            <div className="main-content">
                <HomeCover/>
                <HomeContainer posts={posts}/>
            </div>
        </div>
    )
}
