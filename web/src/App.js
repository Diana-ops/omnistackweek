import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from "./components/DevForm";
import DevItem  from "./components/DevItem";

/*Conceps about React
 Components: it is a function that return some HTML or CSS, something that repeate. 
             A example is the function App (always begin with upper case). 
             It is a good pratic to have only component for file.js

             Isoled bloc of HTML, CSS and JS that not interfered in application

 State: Information of the component will to manipulate 

 Proprieties: Are atributers as "title", "class", "src", etc

*/

function App() { 

  const [ devs, setDevs ] = useState([]);


  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);


  async function handleAddDev(data){

    const response = await api.post('./devs', data);
    const hasDev = devs.filter(dev => dev.github_name === data.github_name);

    if(!hasDev) {
      setDevs([...devs, response.data])
    } 

  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>


        <ul>

          {devs.map(dev => (

            <DevItem key={dev._id} dev={dev}/>

          ))}

          

        </ul>

      </main>

    </div>

  );
}

export default App;
