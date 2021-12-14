import { Meetups } from '../models/meetups'
import MeetupCard from './MeetupCard'

interface Props {
  meetups: Meetups[];
}


function MeetupsStartView({ meetups }: Props) {

  console.log('array of meetups:', meetups)

  return (

    meetups.map((meetup) => (
      <div key={meetup.id}>
        <MeetupCard
          title={meetup.title}
          description={meetup.description}
          location={meetup.location}
          date={meetup.date}
          time={meetup.time}
        /></div>
    ))

  )
}

export default MeetupsStartView
