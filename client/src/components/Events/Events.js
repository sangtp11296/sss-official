import React, { useState } from 'react'
import styles from './Events.module.css'

export default function Events() {
    const [img,setImg] = useState([]);
    return (
        <div className={styles.events}>
            <div className={styles.eventContainer}>
                <div className={styles.eventName}>
                    <img alt='' className={styles.eventPhotoCover} src/>
                </div>
                <div className={styles.eventPhotoContainer}>

                </div>
            </div>
        </div>
    )
}
