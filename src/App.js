import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';
import DataList from './DataList';
import DataTable from './DataTable';

function App() {
  const API_URL='https://jsonplaceholder.typicode.com/';
  const[reqType, setReqType] = useState('users');
  //this state will be either the request for users, posts or comments and will show depending on which button you click
  const[dataObj, setDataObj] = useState([]);
  //this will be the data objects we get back from the fetch req

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        // console.log(data);
        setDataObj(data);
      } catch (err) {
        console.log(err);
      }
    } // setting basic try catch block with the url adding req type to end
    //now need to return fetchData

    fetchData();
    //this will call the fetch data resources as they change
  },[reqType])
  //this will run any time reqType state changes

  return(
    <>
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <DataList dataObj={dataObj} /> */}
      <DataTable dataObj={dataObj} />
    </>
  );
}

export default App;
