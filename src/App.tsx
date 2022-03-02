import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { meetupsData } from './data/meetupsData'
import './App.css';
import MeetupsStartView from './components/MeetupsStartView';
import MeetupDetails from './components/MeetupDetails'

function App() {

  const [meetups, setMeetups] = useState(localStorage.getItem('meetups') != null ? localStorage.getItem('meetups') : '[{}]')

  useEffect(() => {
    if (!localStorage.getItem('meetups')) {
      localStorage.setItem('meetups', JSON.stringify(meetupsData))
      setMeetups(localStorage.getItem('meetups'))

    } else if (localStorage.getItem('meetups')) {
      setMeetups(localStorage.getItem('meetups'))
    }
  }, [meetups])

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          Happy Meetups &#129325;
        </header>
        <section className="main-content">
          <Routes>
            {localStorage.getItem('meetups') && (<Route path="/" element={<MeetupsStartView meetups={JSON.parse(meetups || '')} />}></Route>)}
            <Route path="/meetup/:id" element={<MeetupDetails meetups={JSON.parse(meetups || '')} myName='' myEmail='' />}></Route>
          </Routes>
        </section>
      </Router>

    </div>
  );
}

export default App;
