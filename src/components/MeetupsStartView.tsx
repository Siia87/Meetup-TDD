import { IMeetups } from '../models/meetups'
import { useState } from "react";
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'

interface Props {
  meetups: IMeetups[];
}

function MeetupsStartView({ meetups }: Props) {
  const [searchText, setSearchText] = useState("");

  const filteredMeetups = meetups.filter((meetup) =>
    meetup.title.match(new RegExp(searchText, "i"))
  )

  const sortedMeetups = filteredMeetups.sort((a, b) => (a.date).localeCompare(b.date))

  console.log('sorterat: ', sortedMeetups)

  return (
    <>
      <SearchBar searchValue={searchText} setSearchValue={setSearchText} />

      {sortedMeetups.map((meetup) => (
        <div key={meetup.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title" >Title: {meetup.title}</h3>
            <p data-test="meetup-description">Description: {meetup.description}</p>
            <p data-test="meetup-location">Location: {meetup.location}</p>
            <p data-test="meetup-time-date">Time:{meetup.time} Date: {meetup.date}</p>

            <Link data-test="show-MeetupDetails" to={`/meetup/${meetup.id}`} > Show more </Link>
          </section>
        </div>
      ))}
    </>
  )
}

export default MeetupsStartView
