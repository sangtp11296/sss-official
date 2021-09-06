import React from 'react'
import Post from '../../../Pages/Post/Post'
import styles from './HomeContainer.module.css'

export default function HomeContainer (props) {
    return (
        <div className={styles.homeContainer}>
            {props.posts.map((params,id)=>(
                <Post key={id} post={params}/>
            ))}
        </div>
    )
}


