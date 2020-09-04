import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        
    }, [])
    // console.log(posts)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Posts: {posts.length}</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;