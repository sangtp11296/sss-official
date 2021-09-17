import React from 'react'
import SpecialPost from './SpecialPost'
import NormalPost from './NormalPost'

export default function Post6Block(props) {
    return (
        <>
            {props.id === 0 || props.id === 5 ? <SpecialPost post={props.post}/> : <NormalPost post={props.post}/>}
        </>
    )
}

