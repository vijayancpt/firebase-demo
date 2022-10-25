import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import './firebase';

import {getVegList,addValue,deleteData,updateData} from  './firebase';

function App() {

  const [vegList,setVegList] = useState('');

useEffect(()=>{
  getVegList().then((result)=>{ 
  console.log('VegList::',result)
setVegList(JSON.stringify(result));
});

},[]);

  return (
    <div className="App"  style={{backgroundColor:'red'}}>
      <header>
        <h3>VegList:</h3>
        {
          vegList
        }
      </header>
      <button onClick={addValue}>Add Value</button>
      <button onClick={deleteData}>Delete Value</button>
      <button onClick={updateData}>Update Value</button>

    </div>

  );
}

export default App;
