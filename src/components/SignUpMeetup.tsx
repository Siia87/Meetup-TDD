import { useForm } from "react-hook-form"
import { ISignupForm } from "../models/SignupForm"

interface Props {
  onClick: () => void;
  myName: string;
  setMyName: (name: string) => void;
  myEmail: string;
  setMyEmail: (email: string) => void;
}

function SignUpMeetup({ onClick, myName, setMyName, myEmail, setMyEmail }: Props) {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignupForm>()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <>
      <form onSubmit={onSubmit} data-test="attendMeetupForm">
        <div>
          <label>Name:</label>
          <input
            data-test="inputName"
            type="text"
            placeholder="Firstname Lastname"
            {...register("Name", {
              required: true,
              pattern: {
                value: /^[^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{3}$/i,

                message: "Enter your name"
              }
            })}
            value={myName}
            onChange={(event) => (setMyName(event.target.value))} />
          {errors.Name && <p className="sendName_error">{errors.Name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            data-test="inputEmail"
            {...register("Email", {
              required: true,

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address"
              }
            })}
            type="text"
            name="Email"
            placeholder="Exemple@gmail.com"
            value={myEmail}
            onChange={(event) => setMyEmail(event.target.value)}
          />
          {errors.Email && (
            <p className="sendMail_error">{errors.Email.message}</p>
          )}
        </div>
        <button data-test="commitBtn" onClick={onClick}>Commit</button>
      </form>
    </>
  )
}

export default SignUpMeetup