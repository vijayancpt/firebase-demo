import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import './firebase';

import { getVegList, addValue, deleteData, updateData } from './firebase';

function App() {

  const [vegList, setVegList] = useState<any>([]);

  useEffect(() => {
    getVegList().then((result) => {
      console.log('VegList::', result)
      setVegList(result);
    });

  }, []);

  return (
    <div className="App"  style={{backgroundColor:'green', height:'500px'}}>
      <header>
        <h3>VegList:</h3>
       
          
          <table style={{
            margin:'auto'
          }} border={1}>
            <th>Veg Name</th> <th>Veg Count</th>

            {
              vegList.map((curRow:any)=>(
                <tr>
                <td>{curRow.VegName}</td>
                <td>{curRow.VegQuantity}</td>
                </tr>
              ))
            }
            
          </table>

      </header>
      <div style={{margin:'500px'}}>
      <button onClick={addValue}>Add Value</button>
      <button onClick={deleteData}>Delete Value</button>
      <button onClick={updateData}>Update Value</button>
      </div>

    </div >

  );
}

export default App;
