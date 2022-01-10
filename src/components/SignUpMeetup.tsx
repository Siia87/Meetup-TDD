

interface Props {
  onClick: () => void;
  myName: string;
  setMyName: (name: string) => void;
  myEmail: string;
  setMyEmail: (email: string) => void;
}

function SignUpMeetup({ onClick, myName, setMyName, myEmail, setMyEmail }: Props) {


  return (
    <>
      <form  >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            placeholder="Firstname Lastname"
            value={myName}
            onChange={(event) => (setMyName(event.target.value))} />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name='Email'
            placeholder="Exemple@gmail.com"
            value={myEmail}
            onChange={(event) => (setMyEmail(event.target.value))} />
        </div>

        <button onClick={onClick}>Commit</button>
      </form>
    </>
  )
}

export default SignUpMeetup