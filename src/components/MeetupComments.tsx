//import { IComment } from '../models/comments'
import { IComment } from '../models/comments'
//import { IMeetups } from '../models/meetups'
interface Props {
  meetup: IComment

}

function MeetupComments({ meetup }: Props) {
  console.log(meetup)
  return (
    <>
      <div className="comments">
        <p>{meetup.dateTime}</p>
        <p>Rating: {meetup.newRating}</p>
        <p>Comment: {meetup.message}</p>
      </div>
      <hr />
    </>
  )
}

export default MeetupComments