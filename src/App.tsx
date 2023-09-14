import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./styles/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800&family=Oswald&display=swap" rel="stylesheet" />
        <title>Interior | Design</title>
      </head>
      <HomePage />
    </>
  );
};
