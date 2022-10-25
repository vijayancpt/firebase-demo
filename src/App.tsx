import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import './firebase';

import {getVegList} from  './firebase';

function App() {

  const [vegList,setVegList] = useState('');

useEffect(()=>{
  getVegList().then((result)=>{ 
  console.log('VegList::',result)
setVegList(JSON.stringify(result));
});

},[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>VegList:</h3>
        {
          vegList
        }
      </header>
    </div>
  );
}

export default App;
