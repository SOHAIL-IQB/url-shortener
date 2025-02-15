import './PasswordInput.css'

const PasswordInput = (props) => {

  const {setPassword} = props

  return (
    <div className="password-input-container">
        <label id="password-input">Password</label> <br></br>
        <input onChange={(e)=>{setPassword(e.target.value)}} id="password-input" type="password"/>
    </div>
  )

}

export default PasswordInput