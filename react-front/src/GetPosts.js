import React from 'react';
import './GetPosts.css';

export const GetPosts = ({get}) => {
    console.log(get);
    console.log(Object.entries(get))
    return (
        <>
        {Object.entries(get).map(post => (
            <div className="container">
                {console.log(post)}
                <h3> {post.id} </h3>
                <h3> {post.topic} </h3>
                <h3> {post.data} </h3>
            </div>
        )
            )}
        </>
);

}