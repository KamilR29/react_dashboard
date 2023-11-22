import './App.css';
import {useState} from "react";
import {TasksList} from "./componenets/tasksList";

function App() {



  return(
      <>
          <header></header>
          <aside></aside>

          <main>
              <div id ="waiting"><TasksList/></div>
              <div id ="inprogress"><TasksList/></div>
              <div id ="done"><TasksList/></div>

          </main>

      </>
  )



}

export default App;
