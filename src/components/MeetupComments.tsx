import { IComment } from '../models/comments'

interface Props {
  meetup: IComment
}

function MeetupComments({ meetup }: Props) {
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