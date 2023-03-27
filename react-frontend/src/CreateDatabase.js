import React from 'react';
export const CreateDatabase = ({set}) => {
    fetch('http://localhost:8080/init', {method: 'POST', 
    headers: {'Content-type': 'application/x-www-form-urlencoded'}})
    .then(response => response.text())
    .then(response => console.log(response))
    .then(fetch('http://localhost:8080/getPosts')
    .then(response => response.json())
    .then(response => set(response))
    )
    
    return (
        <>
        <h3>Database and Tables successfuly created</h3>
        </>
    );
}