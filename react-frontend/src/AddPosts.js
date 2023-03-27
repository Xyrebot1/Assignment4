import React from 'react';
import {useState} from 'react';

export const AddPosts = ({set}) => {
    const [getTopic, setTopic] = useState('');
    const [getData, setData] = useState('');
    return (
        <>
        <h3> AddPosts </h3>
        <div>
        <input type="text" placeholder="Topic" value={getTopic} 
        onChange={e => setTopic(e.target.value)} /><br/>
        <input type="text" placeholder="Data" value={getData} 
        onChange={e => setData(e.target.value)} />
        </div>
        <button onClick={(e) => {
            fetch('http://localhost:8080/addPost', {method: 'POST', body: `topic=${getTopic}&data=${getData}`, 
            headers: {'Content-type': 'application/x-www-form-urlencoded'}})
            .then(fetch('http://localhost:8080/getPosts')
            .then(response => response.json())
            .then(response => set(response))
            .then(alert(`Topic: ${getTopic}, Data: ${getData} `))
            );
        }
    }> Submit</button>
    </>
    );
}
