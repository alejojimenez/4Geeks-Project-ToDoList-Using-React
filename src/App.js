import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './App.css';

function App() {

  const [ valueList, setValueList ] = useState(['shoes', 'shirts', 'socks', 'sweaters']);
  // metodo concat, no se pudo usar el push.
  function addList(e) {
    if(e.key === 'Enter' && e.target.value !=="" ) {
      setValueList(valueList.concat(e.target.value));
      e.target.value = "";
    }
  }

  function delList(index) {
    if(index > -1) {
      const filterData = valueList.filter(item => item !== valueList[index]);
      setValueList(filterData);
    }
  }
  
  return (
      <div className="container">
        <h1 className = "title">To Do List</h1>
        <br />
        <div className = "inputValue">
          <input type="text" name="item" placeholder=" What needs to be done?" onKeyPress = { (e) => addList(e) } />
          <div className = "list">
            <br />
            <ul className = "lineForm">
              { valueList.map((valor, index) => {
                return (
                  <li className = "listForm" onClick = { () => { delList(index)}}>
                    {valor} <span className = "positionIcons"> <FaTrashAlt /> </span>
                  </li>
              )})}
            </ul>
          </div>
        </div>
        <br />
        <div className = "itemsNumberToTheList">
          <p>
            {valueList.length} {" "}
            Item left
          </p>
        </div>
      </div>
  );
}

export default App;