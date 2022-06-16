import React from 'react';
import logo from './logo.svg';
import './App.css';
// import LoginForm from "./features/Login";
// import Popup from "./components/Popup";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>Not Found</h2>;
}


function App() {
  return (
  <BrowserRouter>
    <Header />
    <h1>Hello React Router</h1>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/contact">Contact</Link></p>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
