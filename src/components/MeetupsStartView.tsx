import { IMeetups } from '../models/meetups'
import { useState } from "react";
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'
import { meetupsData } from '../data/meetupsData'
import AddNewMeetup from './NewMeetup'
import nextId from "react-id-generator";

interface Props {
  meetups: IMeetups[];
  title: string
  description: string
  date: string
  time: string
  location: string
}

function MeetupsStartView({ meetups }: Props) {
  const [searchText, setSearchText] = useState("");
  const [meetup, setMeetup] = useState<IMeetups[]>(meetupsData)
  const filteredMeetups = meetup.filter((meetup) =>
    meetup.title.match(new RegExp(searchText, "i"))
  )

  const myid = nextId()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")

  const sortedMeetups = filteredMeetups.sort((a, b) => (a.date).localeCompare(b.date))

  const addMeetup = (): void => {
    const myMeetup = {
      id: myid,
      title: title,
      description: description,
      date: date,
      time: time,
      location: location
    }
    setMeetup([...meetup, myMeetup])
    console.log('ny meetup:', myMeetup)
    console.log('alla meetups', meetup)
  }

  return (
    <>


      <AddNewMeetup
        onClick={addMeetup}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        location={location}
        setLocation={setLocation}
      />
      <SearchBar searchValue={searchText} setSearchValue={setSearchText} />
      {sortedMeetups.map((meetup) => (
        <div key={meetup.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title" >Title: {meetup.title}</h3>
            <p data-test="meetup-description">Description: {meetup.description}</p>

            <p data-test="meetup-date"> Date: {meetup.date}</p>

            <Link data-test="show-MeetupDetails" to={`/meetup/${meetup.id}`} > Show more </Link>
          </section>
        </div>
      ))}
    </>
  )
}

export default MeetupsStartView
