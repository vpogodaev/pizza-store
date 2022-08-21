import React from 'react';
import './App.scss';
import { Constructor } from '@pages/constructor';
import { Header } from '@shared/ui/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Constructor />
    </div>
  );
}

export default App;
