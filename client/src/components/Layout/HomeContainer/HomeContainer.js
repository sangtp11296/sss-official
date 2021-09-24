import React from 'react'
import Post6B from '../../../Pages/Post/Post6B/Post6B'
import Post5B from '../../../Pages/Post/Post5B/Post5B'
import styles from './HomeContainer.module.css'


export default function HomeContainer (props) {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.post6Block}>
                {props.posts.map((params,id)=>(
                    <Post6B key={id} id={id++} post={params}/>
                ))}
            </div>
            <div className={styles.post5Block}>
                {props.posts.map((params,id)=>(
                    <Post5B key={id} id={id++} post={params}/>
                ))}
            </div>
            
        </div>
    )
}


