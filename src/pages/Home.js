import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage() {
  return (
    <div>
      
     
      <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/tasimaci.png"
            alt="Tasımacı"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/tasimaciKamyon.png"
            alt="Tasımacı Kamyon"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/esya.png"
            alt="Eşya"
          />
        </Carousel.Item>
      </Carousel>
    </div><br /><br />
    
      <div className="ilan">
        <a href="http://www.google.com">
          <img src="img/aracımVar.png" alt="Aracım Var" />
        </a>
        <a href="http://www.google.com">
          <img src="img/esyamVar.png" alt="Eşyam Var" />
        </a>
      </div>
      <hr />

 
    </div>
    
  );
}

export default HomePage;
