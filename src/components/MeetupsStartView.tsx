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


  const sortedMeetups = filteredMeetups.sort((a, b) => (a.date).localeCompare(b.date))

  console.log('sorterat: ', sortedMeetups)

  const [comment, setComment] = useState("")
  // const [addComment, setAddComment] = useState[]

  // const textAreaComment (){
  //   setComment(hej');
  // }


  return (

    <>

      <SearchBar searchValue={searchText} setSearchValue={setSearchText} />

      {sortedMeetups.map((meetup) => (
        <div key={meetup.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title" className="meetup-data">Title: {meetup.title}</h3>
            <p>Description: {meetup.description}</p>
            <p>Location: {meetup.location}</p>
            <p>Time:{meetup.time} Date: {meetup.date}</p>

            <button data-test="sign-up-btn">
              Sign up for event
            </button>
          </section>
          <section>
            Add comment or question:
            <textarea data-test="textfield"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
            <button data-test="addCommentBtn" onClick={() => console.log("addComentBtn")}>Add comment</button>
            <ul data-test="listOfComments">
              <li>{comment}</li>
            </ul>
          </section>
        </div>
      ))}
    </>
  )
}

export default MeetupsStartView
