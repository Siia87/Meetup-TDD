import { IComment } from '../models/comments'
interface Props {
  comment: IComment

}

function MeetupComments({ comment }: Props) {

  return (
    <>
      <div className="comments">
        <p>{comment.dateTime}</p>
        <p>Rating: {comment.newRating}</p>
        <p>Comment: {comment.message}</p>
      </div>
      <hr />
    </>
  )
}

export default MeetupComments