import React, {useState,useEffect} from 'react'
import HomeContainer from '../../components/Layout/HomeContainer/HomeContainer'
import HomeCover from '../../components/Layout/HomeContainer/HomeCover'
import './Home.module.css'
import axios from 'axios'
import { useLocation } from 'react-router'

export default function Home(props) {
    props.setWhiteHeaderCallback(false);
    const [posts,setPosts] = useState([{}]);
    const {search} = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts' + search);
            setPosts(res.data);
        }
        fetchPosts();
    }, [search])
    return (
        <div className="en-lang" lang="en">
            <div className="main-content">
                <HomeCover posts={posts[0]}/>
                <HomeContainer posts={posts}/>
            </div>
        </div>
    )
}
