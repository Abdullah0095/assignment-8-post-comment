import React from 'react';

const CommentInfo = (props) => {
    
    const {name, email, body} = props.comment;
    
     return (
        <div>
            
            <h1>Name: {name}</h1>
                <h2>Email: {email}</h2>
                <p>Comment: {body}</p>
        </div>
    );
};

export default CommentInfo;