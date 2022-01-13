import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { IMeetups } from '../models/meetups'
import { IComment } from '../models/comments'
import MeetupComments from '../components/MeetupComments'
import SignUpMeetup from '../components/SignUpMeetup'


interface Props {
  meetups: IMeetups[];
  myName: string
  myEmail: string
}

function MeetupDetails({ meetups }: Props) {

  const { id } = useParams()

  const [meetup, setMeetup] = useState({
    id: '',
    title: '',
    description: '',
    location: '',
    time: '',
    date: ''
  })

  useEffect(() => {
    meetups.map((meetup) => {
      if (meetup.id === id) {
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
      return ('No Meetups found')
    })
  }, [id, meetups])


  //set date and time for comment
  const [today, setToday] = useState(new Date())
  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000);
  }, []);

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const dateTime = date + ', ' + time;

  //Adding comment on meetup
  const [comment, setComment] = useState<string>("")
  const [myRating, setMyRating] = useState(0)
  const [newComment, setNewComment] = useState<IComment[]>([])

  const handleRating = (rate: number) => {
    setMyRating(rate)

  }
  const addComment = (): void => {
    if (comment !== "" || myRating !== 0) {
      console.log(dateTime)
      console.log('add comment clicked')
      const myComment = { message: comment, dateTime: dateTime, newRating: myRating }
      setNewComment([...newComment, myComment]);
      setComment("")
    }
  }

  //signingup for meetup

  const [showSignup, setShowSignup] = useState(false)

  const [goingToMeetup, setgoingToMeetup] = useState(false)

  const signUpBtn = (): void => {
    setShowSignup(true)
  }
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const signedUp = (): void => {
    if (signupName.match(/[a-z0-9]/) &&
      signupEmail.match(/[@]/)) {
      setShowSignup(false)
      setgoingToMeetup(true)
      setSignupName('')
      setSignupEmail('')
      return
    }
  }


  return (
    <>
      <section>
        <h3 data-test="meetup-title" className="meetup-data">Title: {meetup.title}</h3>
        <p>Description: {meetup.description}</p>
        <p>Location: {meetup.location}</p>
        <p>Time:{meetup.time} Date: {meetup.date}</p>
        {goingToMeetup ? <h3>You are signed up for meetup</h3> : null}
        {showSignup ?
          <SignUpMeetup
            onClick={signedUp}
            myName={signupName}
            setMyName={setSignupName}
            myEmail={signupEmail}
            setMyEmail={setSignupEmail}
          /> : null}
        {!showSignup ? <button data-test="sign-up-btn" onClick={signUpBtn}>
          Sign up for event
        </button> : null}

      </section>
      <section>

        <p>Add comment:</p>
        <textarea data-test="textfield"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <div>
          <Rating
            data-test="rating-stars"
            onClick={handleRating}
            ratingValue={myRating}
            size={20}
            fillColor={'#264143'} />
        </div>
        <div>
          <button data-test="addCommentBtn" onClick={addComment}>Add</button>
        </div>
      </section>
      <div className="commentsArea" >

        {newComment.map((comment: IComment, key: number) => {
          return <MeetupComments key={key} comment={comment} />
        })}
      </div>

    </>
  )
}

export default MeetupDetails