import { IMeetups } from '../models/meetups'
import { IComment } from '../models/comments'
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'
import AddNewMeetup from './NewMeetup'
import nextId from "react-id-generator";

interface Props {
  meetups: IMeetups[]
}

function MeetupsStartView(props: Props) {
  const [searchText, setSearchText] = useState("")
  const [filteredMeetups, setFilteredMeetups] = useState(props.meetups)

  const myid = nextId()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>("")
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [comment, setComment] = useState<IComment[]>([])
  const [attend, setAttend] = useState<number>(0)
  const [errorText, setErrorText] = useState(true)

  useEffect(() => {

    let meetups = props.meetups.filter(
      (item: any) =>
        item.title.match(new RegExp(searchText, 'i'))
    )

    const sortedMeetups = meetups.sort((a, b) => (a.date).localeCompare(b.date))
    setFilteredMeetups(sortedMeetups)

  }, [searchText, props.meetups])

  const addMeetup = (): void => {
    let myMeetup = {
      id: myid,
      title: title,
      description: description,
      date: date,
      time: time,
      location: location,
      comments: [],
      attending: 0
    }

    if (
      title !== '' &&
      description !== '' &&
      date !== '' &&
      time !== '' &&
      location !== ''
    ) {
      props.meetups.push(myMeetup)
      localStorage.setItem('meetups', JSON.stringify(props.meetups))

      let meetups = props.meetups.filter(
        (item: any) =>
          item.title.match(new RegExp(searchText, 'i'))
      )

      const sortedMeetups = meetups.sort((a, b) => (a.date).localeCompare(b.date))
      setFilteredMeetups(sortedMeetups)
      setErrorText(true)

    }
    else {
      setErrorText(false)
    }
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
        comment={comment}
        setComment={setComment}
        attend={attend}
        setAttend={setAttend}
        errorText={errorText}
      />
      <hr />
      <SearchBar searchValue={searchText} setSearchValue={setSearchText} />
      {filteredMeetups.map((meetup) => (
        <div key={meetup.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title" >Title: {meetup.title}</h3>
            <p data-test="meetup-description">Description: {meetup.description}</p>
            <p data-test="meetup-location">Location: {meetup.location}</p>
            <p data-test="meetup-date-time"> Date: {meetup.date} Time: {meetup.time}</p>

            <Link data-test="show-MeetupDetails" to={`/meetup/${meetup.id}`} > Show more </Link>
          </section>
        </div>
      ))}
    </>
  )
}

export default MeetupsStartView
