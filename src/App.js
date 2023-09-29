import "./App.css"
import Header from "./components/Header";
import React from "react";
import "./style.css";

export default function App() {
  const data='coding challenge'
  return (
    <div>
       <Header pass={data}/>
      <h1 style={{color:"green",backgroundColor:"yellow"}}>Hello StackBlitz!</h1>
      <p className="hello">welcome to react {data}</p>
      <Hello/>
     
</div>
  );
}

function Hello()
{
  return(<p> Its a front end library</p>)
}