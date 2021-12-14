
interface Props {

  title: string,
  description: string,
  location: string,
  date: string, //YYYY-mm-dd
  time: string
}

function MeetupCard({ title, description, location, date, time }: Props) {

  return (
    <>
      <div>
        <h3 data-test="meetup-title">Title: {title}</h3>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Time:{time} Date: {date}</p>
      </div>
      <button data-test="sign-up-btn">
        Sign up for event
      </button>

      <textarea ></textarea>

    </>
  )
}

export default MeetupCard





