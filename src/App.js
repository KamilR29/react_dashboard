import './App.css';
import {useState} from "react";
import {TasksList} from "./componenets/tasksList";
import {Menu} from "./componenets/menu";

function App() {



  return(
      <>
          <header><Menu/></header>
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
