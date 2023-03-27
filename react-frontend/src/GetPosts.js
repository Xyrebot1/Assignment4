import React from 'react';
import {Post} from './Post';

export const GetPosts = ({get}) => {

    return (
        <>
        {get.map(post => (
            <li key={post.id}>
                <Post 
                    id = {post.id}
                    topic = {post.topic}
                    data = {post.data}
                />
            </li>
            
        ))}
        </>
);

}