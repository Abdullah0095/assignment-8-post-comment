import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentInfo from '../CommentInfo/CommentInfo';



const PostInfo = () => {
    
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        
    }, [])
    // console.log(post)

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    console.log(comments)

    const postInfoDecoration = {
        color: 'rgb(80, 69, 69)',
        border: '5px solid indigo',
        margin: '100px 400px',
        textAlign: 'center',
        width: '500px',
        borderRadius: '5px'
    }

    return (
      <div>
          <div style={postInfoDecoration}>
            <h1>Details</h1>
            <h3>{post.body}</h3>
          </div>
            <div>
            {
                comments.map(comment => <CommentInfo comment={comment}></CommentInfo>)
            }

            </div>
      </div>
    );
};

export default PostInfo;