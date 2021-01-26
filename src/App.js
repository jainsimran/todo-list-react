import './App.css';
import React, { useState } from 'react';

function App() {
  let [listItem, setListItem] = useState('');
  let [todoList, setTodoList] = useState([]);

  function addItem() {
    let tempList = [...todoList];
    tempList.unshift(listItem);
    setTodoList(tempList);
    setListItem('');
  }

  function deleteItem(index) {
    let tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
  }

  return (
    <div>
      <h1> Todo List </h1>
      <input type='text' value={listItem} onChange={(event) => setListItem(event.target.value)} />
      <button onClick={() => addItem()}>Submit</button>
      <p>{`Total item in the list = ${todoList.length}`}</p>
      <ol>
        {todoList.map((item, index) => {
          return (
              <div key={index} className='listItem'>
                <li>{item}</li>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
