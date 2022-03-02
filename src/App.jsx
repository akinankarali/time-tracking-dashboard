import React, { useState, useEffect } from 'react';
import './styles/app.css'
import axios from 'axios';
import Card from './components/Card'
import Widget from './components/Widget'
import { ButtonContext } from './contexts/ButtonClickContext';

import ProfilePicture from '../images/image-jeremy.png'


function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedId, setClickedId] = useState(0);


  useEffect(() => {
    axios
      .get("/data.json")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ButtonContext.Provider value={{ clickedId, setClickedId, data }}>
      <div className="App">
        <div className='wrapper'>
          <div className="profile-item">
            <Card title="Jeremy Robson" profilePic={ProfilePicture} />
          </div>
          {isLoading ? "Loading..." : <main className="widget-items">
            {data.map((item, index) => (
              <Widget
                key={index}
                title={item.title}
              />
            ))}
          </main>}
        </div>
        <footer>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" >Frontend Mentor </a>
          . Coded by <a href="https://github.com/akinankarali">Saim Akın Ankaralı</a>.
        </footer>

      </div>
    </ButtonContext.Provider>
  )
}

export default App
