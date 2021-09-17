import React from 'react'
import Post6Block from '../../../Pages/Post/Post6Block'
import styles from './HomeContainer.module.css'

export default function HomeContainer (props) {
    return (
        <div className={styles.homeContainer}>
            {props.posts.map((params,id)=>(
                <Post6Block key={id} id={id++} post={params}/>
            ))}
        </div>
    )
}


