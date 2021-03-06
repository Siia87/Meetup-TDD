import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { IMeetups } from '../models/meetups'
import MeetupComments from '../components/MeetupComments'
import SignUpMeetup from '../components/SignUpMeetup'

interface Props {
  meetups: IMeetups[]
  myName: string
  myEmail: string
}

function MeetupDetails(props: Props) {

  const { id } = useParams()

  const [meetup, setMeetup] = useState({
    id: '',
    title: '',
    description: '',
    location: '',
    time: '',
    date: '',
    comments: [{
      message: '',
      dateTime: '',
      newRating: 0
    }],
    attending: 0

  })

  useEffect(() => {
    props.meetups.map((meetup) => {
      if (meetup.id === id) {
        const meeting = {
          id: meetup.id,
          title: meetup.title,
          description: meetup.description,
          location: meetup.location,
          time: meetup.time,
          date: meetup.date,
          comments: meetup.comments,
          attending: meetup.attending

        }
        return setMeetup(meeting)
      }
      return ('No Meetups found')
    })
  }, [id, props.meetups])


  //set date and time for comment
  const [today, setToday] = useState(new Date())
  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000);
  }, []);

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const dateTime = date + ', ' + time;

  //Adding comment on meetup
  const [myComment, setMyComment] = useState<string>("")
  const [myRating, setMyRating] = useState(0)

  const handleRating = (rate: number) => {
    setMyRating(rate)
  }

  const addComment = (): void => {
    if (myComment !== "" || myRating !== 0) {

      const myNewComment = { message: myComment, dateTime: dateTime, newRating: myRating }
      const id = meetup.id
      const index = props.meetups.findIndex(item => item.id === id);
      props.meetups[index].comments.push(myNewComment)
      localStorage.setItem('meetups', JSON.stringify(props.meetups))
      setMyComment('')
      setMyRating(0)
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

      const id = meetup.id
      const index = props.meetups.findIndex(item => item.id === id);
      let attend = props.meetups[index].attending
      attend++
      props.meetups[index].attending = attend
      localStorage.setItem('meetups', JSON.stringify(props.meetups))
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
        <p>Date: {meetup.date} Time:{meetup.time} </p>
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

        <p>Attending to this event: {meetup.attending} people</p>
      </section>
      <section>

        <p>Add comment:</p>
        <textarea data-test="textfield"
          value={myComment}
          onChange={(event) => setMyComment(event.target.value)}
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

      {meetup.comments.map((comment) => {
        return <MeetupComments meetup={comment} />
      })}


      <div id='goBackLink'>
        <Link data-test="go_back" to={`/`}> Go Back </Link>
      </div>

    </>
  )
}

export default MeetupDetails