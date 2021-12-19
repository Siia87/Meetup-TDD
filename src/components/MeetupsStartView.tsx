import { Meetups } from '../models/meetups'
import React from 'react';
import { useState } from "react";
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'

interface Props {
  meetups: Meetups[];

}


// interface commentField {

// }


function MeetupsStartView({ meetups }: Props) {
  const [searchText, setSearchText] = useState("");

  const filteredMeetups = meetups.filter((meetup) =>
    meetup.title.match(new RegExp(searchText, "i"))
  )


  const sortedMeetups = filteredMeetups.sort((a, b) => (a.date).localeCompare(b.date))

  console.log('sorterat: ', sortedMeetups)

  // const [comment, setComment] = useState("")

  // const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const enteredComment = event.target.value;
  //   setComment(enteredComment)
  //   console.log(setComment)
  // }
  // function handleChange (e) => {
  //   setComment({ value: e.target.value })
  // }
  // const [addComment, setAddComment] = useState('')

  // const textAreaComment (id){
  //   setComment('hej');
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

            <Link data-test="Show-MeetupDetails" to={`/meetup/${meetup.id}`} > Show more </Link>


          </section>
        </div>
      ))}
    </>
  )
}

export default MeetupsStartView


  // < section >
  //           <h3 data-test="meetup-title" className="meetup-data">Title: {meetup.title}</h3>
  //           <p>Description: {meetup.description}</p>
  //           <p>Location: {meetup.location}</p>
  //           <p>Time:{meetup.time} Date: {meetup.date}</p>

  //           <button data-test="sign-up-btn">
  //             Sign up for event
  //           </button>
  //         </section >
  // <section>
  //   Add comment or question:
  //   <textarea data-test="textfield"
  //     name={`${meetup}_value`}
  //     value={comment}
  //     onChange={handleChange}
  //   ></textarea>
  //   <button data-test="addCommentBtn" onClick={() => console.log("addComentBtn")}>Add comment</button>
  //   <ul data-test="listOfComments">
  //     <li>{comment}</li>
  //   </ul>
  // </section>