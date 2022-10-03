import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {

    let [advice, setAdvice] = useState('');
    let [id, setId] = useState(0);

    const url = 'https://api.adviceslip.com/advice';
    

    useEffect(() => {
     const fetchData = async () => {
      try{
        const res = await fetch(url);
        const data = await res.json();
        setAdvice(data.slip.advice)
        setId(data.slip.id)
        console.log(data)
      }catch (error) {
        console.log("error", error);
		}
     }
  fetchData();


    },[])

    const handleOnClick = () => {
    
      const fetchData = async () => {
        try{
          const res = await fetch(url);
          const data = await res.json();
          setAdvice(data.slip.advice)
          setId(data.slip.id)
          console.log(data)
        }catch (error) {
          console.log("error", error);
      }
       }
       fetchData();
    }
  return (
    <div className="App">
      <div className="container">
        <div className="card">
           <h2>Advice # {id}</h2>
           <h1>{advice}</h1>
           <button onClick={handleOnClick}>New Advice</button>
      </div>
  
    </div>
    </div>
  )
}

export default App;
