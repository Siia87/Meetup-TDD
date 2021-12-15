import { Meetups } from '../models/meetups'
import { useState } from "react";
import SearchBar from "./SearchBar"

interface Props {
  meetups: Meetups[];
}


function MeetupsStartView({ meetups }: Props) {
  const [searchText, setSearchText] = useState("");
  const filteredMeetups = meetups.filter((meetup) =>
    meetup.title.match(new RegExp(searchText, "i"))
  )
  return (
    <>
      <SearchBar searchValue={searchText} setSearchValue={setSearchText} />
      {filteredMeetups.map((meetup) => (
        <div key={meetup.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title">Title: {meetup.title}</h3>
            <p>Description: {meetup.description}</p>
            <p>Location: {meetup.location}</p>
            <p>Time:{meetup.time} Date: {meetup.date}</p>

            <button data-test="sign-up-btn">
              Sign up for event
            </button>
          </section>
          <section>
            Add comment or question:
            <textarea data-test="textfield"></textarea>
            <button data-test="addCommentBtn">Add comment</button>

          </section>
        </div>
      ))}
    </>
  )
}

export default MeetupsStartView
