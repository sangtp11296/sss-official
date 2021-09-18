import React from 'react'
import NormalPost from './NormalPost'
import SpecialPost from './SpecialPost'

export default function Post5B(props) {
    console.log(props.id);
    return (
        <>
            {props.id === 0 ? <SpecialPost post={props.post}/> : <NormalPost post={props.post}/>}
        </>
    )
}
