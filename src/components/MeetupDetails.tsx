import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Meetups } from '../models/meetups'



function MeetupDetails(props: {
  meetups: Array<Meetups>
  // onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  // //state: {value: ''};
  // comment: string;
  // setComment: (value: string) => void;

}) {

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
    props.meetups.map((meetup) => {
      if (meetup.id.toString() === id) {
        const meet = {
          id: meetup.id,
          title: meetup.title,
          description: meetup.description,
          location: meetup.location,
          time: meetup.time,
          date: meetup.date
        }

        return setMeetup(meet)
      }
    })
  }, [id])

  const [comment, setComment] = useState("")

  // const [newComment, setNewComment] = useState([])

  // const handleAddClick () =>{
  //   const add = comment
  //   console.log(add)
  // addComment(add)


  // const addComment (add) =>{
  //   setNewComment(add => [
  //     // { id: Math.random().toString(), value: { comment } },
  //     ...newComment,
  //   ])
  // }
  // const addTask = task => {
  //   if (task === '') {
  //     setAddMode(false)
  //   } else {
  //     setNewItem(newItem => [
  //       { id: Math.random().toString(), value: task },
  //       ...newItem,
  //     ])
  //     setA

  return (
    <>
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
        <button data-test="addCommentBtn" onClick={() => console.log('addCommentBtn')}>Add comment</button>
        <ul data-test="listOfComments">
          <li>{comment}</li>
        </ul>
      </section>
    </>
  )
}

export default MeetupDetails