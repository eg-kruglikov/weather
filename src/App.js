
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { useState, useEffect } from 'react';
import Footer from './components/footer/Footer';
import { useLoaderContext } from './contexts/LoaderContext';
import { useWetherContext } from './contexts/wetherContext';
import Loader from './components/Loader/Loader';

function App() {
  const { weth } = useWetherContext()

  return (
    weth[0] ?
      <div className="allContainer" >
        <Header />
        <Body />
        <Footer />
      </div>
      : <Loader />
  );
}

export default App;
