import React, { useState, useEffect } from 'react';
import "./CommentInfo.css";

const CommentInfo = (props) => {
    const {name, email, body} = props.comment;
    
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [])

  
     return (
        <div>
            
            <div className="CommentInfoStyle">
            
                <div className="half-width-of-box">
                    <img src={photos.message} alt=""/>
                </div>
                
                <div className="half-width-of-box">
                    <h1>Friend: </h1>
                    <h2>{name}</h2>
                    <h1>Email:</h1>
                    <h2>{email}</h2>
                    <h3>Comment:</h3>
                    <p>{body}</p>
                </div>
                
            </div>
        </div>
    );
};

export default CommentInfo;