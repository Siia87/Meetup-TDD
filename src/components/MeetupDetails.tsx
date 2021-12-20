import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Meetups } from '../models/meetups'
import MeetupComments from '../components/MeetupComments'

interface Props {
  meetups: Meetups[];
}

function MeetupDetails({ meetups }: Props) {

  const { id } = useParams()

  const [meetup, setMeetup] = useState({
    id: 0,
    title: '',
    description: '',
    location: '',
    time: '',
    date: ''
  })

  useEffect(() => {
    meetups.map((meetup) => {
      if (meetup.id.toString() === id) {
        const meeting = {
          id: meetup.id,
          title: meetup.title,
          description: meetup.description,
          location: meetup.location,
          time: meetup.time,
          date: meetup.date
        }
        return setMeetup(meeting)
      }
    })
  }, [id])

  const [comment, setComment] = useState("")

  const [newComment, setNewComment] = useState([])

  function handleClick() {
    addComment(comment)
  }

  function addComment(comment: any) {
    console.log('comment for adding to array', comment)
    console.log('adding comment to array', newComment)
    setNewComment(newComment => [...newComment]);
  }

  return (
    <>
      <section>
        <h3 data-test="meetup-title" className="meetup-data">Title: {meetup.title}</h3>
        <p>Description: {meetup.description}</p>
        <p>Location: {meetup.location}</p>
        <p>Time:{meetup.time} Date: {meetup.date}</p>
        {/* <button data-test="sign-up-btn">
          Sign up for event
        </button> */}
      </section>
      <section>
        Add comment or question:
        <textarea data-test="textfield"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button data-test="addCommentBtn" onClick={handleClick}>Add comment</button>
      </section>
      < MeetupComments comment={newComment} />
    </>
  )
}

export default MeetupDetails