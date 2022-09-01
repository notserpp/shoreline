import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shoreline from './Shoreline';
import Over21 from './over21';
import Navbar from './Navbar';
import LondonDry from './LondonDry';
import BerryHibiscus from './BerryHibiscus';
import Footer from './Footer';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Over21 />
    <Shoreline />
    <LondonDry />
    <BerryHibiscus />
    <About />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
