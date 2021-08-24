//import logo from './logo.svg';
import React from 'react';
import Header from './Layout/Header';
import './assets/css/style.css';
import Footer from './Layout/Footer';
import Main from './Layout/Main';

function App() {
  return (
    <div>
        <Header/>
        <section id="hero" classname="d-flex align-items-center justify-content-center">
          <div classname="container position-relative">
            <h1>Welcome to Baker</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href="#about" classname="btn-get-started scrollto">Get Started</a>
          </div>
        </section>
        <Main/>
        <Footer/>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

      </div> 
  );
}

export default App;
