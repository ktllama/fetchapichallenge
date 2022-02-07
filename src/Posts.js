import React, { useState, useEffect } from 'react';
import Main from './Main';

const Posts = (props) => {
    const [posts, setPosts] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // .then(json => JSON.stringify(json))
            .then(json => setPosts(json));
    }, [setPosts]);

    console.log(posts);

    // const postList = posts.map((post) => (
    //     <div key={post.id}>
    //         <h3>{post}</h3>
    //     </div>
    // ));
            // <ul>
            //     {posts.map((post) => {
            //         return(
            //             <li key={post.id}>
            //                 {post}
            //             </li>
            //         );
            //     })}
            // </ul>

    return(
        <>
            <Main />
            {posts}
        </>
    )
}

export default Posts;