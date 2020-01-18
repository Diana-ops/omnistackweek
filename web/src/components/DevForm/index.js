import React, { useState, useEffect } from "react";

import './style.css';

function DevForm({ onSubmit }){

  const [ github_username, setGithubUserName ]  = useState(''); //Create a state
  const [ techs, setTechs ]   = useState('');
  const [ latitude, setLatitude ]  = useState(''); //Create a state
  const [ longitude, setLongitude ]  = useState('');

  useEffect(() => { //Execute only a single time
    //Acess to localization of user
    navigator.geolocation.getCurrentPosition(
      (position) => { //All right
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      }, (err) => { //Found some error
        console.log(err);
        alert("Sorry, some error happened for request your localization. Write your latitude and longitude below");
      },

      {
        timeout: 30000,
      }

    )

  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username, 
      techs,
      latitude,
      longitude,
    });

    setGithubUserName('');
    setTechs('');
  }


  return(
    <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithubUserName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number"
                name="latitude" 
                id="latitude" 
                required value={latitude} 
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)} 
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
  )
}

export default DevForm;