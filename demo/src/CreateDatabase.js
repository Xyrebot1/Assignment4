import React from 'react';
export const CreateDatabase = ({set}) => {
    fetch('http://localhost:8080/addPost', {method: 'POST', body: ``,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}})
    return (
        <h3>Database and tables have been created!</h3>
    );
}