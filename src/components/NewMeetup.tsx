interface Props {
  onClick: () => void
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (description: string) => void
  date: string
  setDate: (date: string) => void
  time: string
  setTime: (time: string) => void
  location: string
  setLocation: (location: string) => void
}

const AddNewMeetup = ({
  onClick,
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  location,
  setLocation,
}: Props) => {
  return (
    <>
      <div className="new-meetup-form">
        <label >
          Title:{' '}
          <input
            data-test="newMeetup-Title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label >
          Description:{' '}
          <input
            data-test="newMeetup-Description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label >
          Date:{' '}
          <input
            data-test="newMeetup-Date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label >
          Time:{' '}
          <input
            data-test="newMeetup-Time"
            type="text"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </label>
        <label >
          Location:{' '}
          <input
            data-test="newMeetup-Location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button data-test="newMeetupBtn" onClick={onClick}>Add new meetup</button>
      </div>
    </>
  )
}

export default AddNewMeetup