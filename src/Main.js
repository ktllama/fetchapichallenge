import React, { useState, useEffect } from 'react';
import Users from './Users';
import Comments from './Comments';
import Posts from './Posts';
import Usersbtn from './Usersbtn';
import Postsbtn from './Postsbtn';
import Commentsbtn from './Commentsbtn';

const Main = () => {
    const [state, setState] = useState('start')

    return(
        <>
            <div>
            {state === 'start' && (
              <Usersbtn display={() => setState('Users') } />
            )}
      
            {state === 'Users' && <Users />}

            {state === 'start' && (
              <Postsbtn display={() => setState('Posts') } />
            )}
      
            {state === 'Posts' && <Posts />}
         
            {state === 'start' && (
              <Commentsbtn display={() => setState('Comments') } />
            )}
      
            {state === 'Comments' && <Comments />}
          </div>
        </>
    )
};

export default Main;