import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function LandingPage() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts/photography')
            setPosts(res.data);

        }
        fetchPosts();
        console.log(posts)
    }, [posts])
    return (

        <div>
            Mainpage
        </div>
    )
}
