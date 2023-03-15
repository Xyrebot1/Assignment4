import React from 'react';
import './GetPosts.css';

export const GetPosts = ({get}) => {

return (
        <>
        {get.map(post => (

            <div className="Post">
                <h3 className="PostID"> {post.id} </h3>
                <h3 className="PostTopic"> {post.topic} </h3>
                <h3 className="PostData"> {post.data} </h3>
            </div>

        ))}
        </>
);

}