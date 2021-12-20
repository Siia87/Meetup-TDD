interface Props {
  comment: Comment[]
}

function MeetupComments({ comment }: Props) {

  return (
    <>
      {comment.length > 0 && (
        <ul data-test="listOfComments">
          <li>hello</li>
        </ul>
      )}

      {comment.length === 0 && 'Be the first to comment'}
    </>
  )
}

export default MeetupComments