import './EmailInput.css'

const EmailInput = (props) => {

  const {setEmail} = props

  return (
    <div className="email-input-container">
        <label for="email-input">Email</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} id="email-input" type="email"/>
    </div>
  )

}

export default EmailInput