
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { meetupsData } from './data/meetupsData'
import './App.css';
import MeetupsStartView from './components/MeetupsStartView';
import MeetupDetails from './components/MeetupDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          Happy Meetups &#129325;
        </header>
        <section className="main-content">
          <Routes>
            <Route path="/" element={<MeetupsStartView meetups={meetupsData} />}></Route>

            <Route path="/meetup/:id" element={<MeetupDetails meetups={meetupsData} myName='' myEmail='' />}></Route>
          </Routes>
        </section>
      </Router>

    </div>
  );
}

export default App;
