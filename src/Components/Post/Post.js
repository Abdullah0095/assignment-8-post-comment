import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Post = (props) => {
    const {title, id} = props.post;

    const postStyle = {
        color: 'white',
        border:'2px solid blue',
        backgroundColor: 'DarkCyan',
        margin: '50px',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '40%',
        height: '200px',
        float: 'left'
    }

    return (
        <div style={postStyle}>
            <h2>Post: {id}</h2>
            <h4>post: {title}</h4>
            <p><Link to={`/post/${id}`}><Button variant="contained" color="default">see more</Button></Link></p>
        </div>
    );
};

export default Post;