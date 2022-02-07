import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const API_URL='https://jsonplaceholder.typicode.com/';
  const[reqType, setReqType] = useState('users');
  //this state will be either the request for users, posts or comments and will show depending on which button you click
  const[dataObj, setDataObj] = useState([]);
  //this will be the data objects we get back from the fetch req

  return(
    <>

    </>
  );
}

export default App;
