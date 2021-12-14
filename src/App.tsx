import React from 'react';
import { meetupsData } from './data/meetupsData'
import './App.css';
import MeetupsStartView from './components/MeetupsStartView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Meetups
      </header>
      <MeetupsStartView meetups={meetupsData} />

    </div>
  );
}

export default App;
