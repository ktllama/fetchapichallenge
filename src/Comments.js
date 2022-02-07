import React, { useState, useEffect } from 'react';
import Main from './Main';

const Comments = (props) => {
    const [comments, setComments] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => JSON.stringify(json))
            .then(json => setComments(json));
        }, [comments, setComments]);

    return(
      <>
        <Main />
        {comments}
      </>
    )
};

export default Comments;