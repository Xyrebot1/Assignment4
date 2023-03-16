import React from 'react';
export const CreateDatabase = () => {
    fetch('http://localhost:8080/init', {method: 'POST', 
    headers: {'Content-type': 'application/x-www-form-urlencoded'}})
    .then(response => response.json())
    return (
        <>
        <h3>Database and Tables successfuly created</h3>
        </>
    );
}