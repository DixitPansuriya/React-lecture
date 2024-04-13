import React, { useState } from 'react';

export default function Todo() {
  const [state, setState] = useState('');
  const [data, setData] = useState([]);

  const buttonstyle={
 backgroundColor:"#333",
 color:"white",






  }

  function addText(e) {
    setState(e.target.value);

  }
  function add() {
    if (state.trim() !== '') {
      setData([...data, state]);
    }
    setState('');
  }
  function Delete(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  function edit(index) {
    const todos = [...data];
    const edited = prompt('Edit here:');
    if (edited !== null && edited.trim() !== '') {
      let updated = [...todos];
      updated[index] = edited;
      setData(updated);
    }
  }

  return (
    <>
      <div >
        <input
        
          onChange={addText}
          type="text"
          aria-label="Search"
        />
        <button  onClick={add}>
          add
        </button>
      </div>

      <div>
        {data.map((item, index) => (
          <div className="todo-item" key={index}>
            <div>{item}</div>
            <div>
              
              <button onClick={() => edit(index)} style={buttonstyle}>Edit</button>
              <button onClick={() => Delete(index)} style={buttonstyle}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
