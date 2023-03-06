import React, { useState, useEffect } from 'react';

const Demo = () => {

    let person = {
        name: "Pragati",
        age: 22
    }

    let [counter, setCounter] = useState(0);
    let [obj, setObj] = useState(person);

    useEffect(() => {
        alert(obj);
    }, [obj])
  return (
    <>
        <div style={{padding: '30px'}}>
            {obj.name}
        </div>
        <button onClick={() => setObj(obj.name==="Pragati"? obj = {name: "Gia"} : obj = {name: "Pragati"})}>click</button>
    </>
  )
}

export default Demo