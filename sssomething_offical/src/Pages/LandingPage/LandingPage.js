import React,{useEffect,useState} from 'react'
import axios from 'axios';
import HomeContainer from '../../components/Layout/HomeContainer/HomeContainer';
import HomeCover from '../../components/Layout/HomeContainer/HomeCover';

export default function LandingPage(props) {
    props.setWhiteHeaderCallback(false);
    const [posts,setPosts] = useState([]);
    const section = props.section
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts/sections/' + section)
            setPosts(res.data);
        }
        fetchPosts();
    }, [section])
    return (
        <div>
            <HomeCover/>
            <HomeContainer posts={posts}/>
        </div>
    )
}
