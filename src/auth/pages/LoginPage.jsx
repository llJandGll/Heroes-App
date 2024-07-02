
import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import "./login.css"
import { AuthContext } from "../context"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useContext( AuthContext )

  const {  name , onChangeInput } = useForm({name : ""})

  // *cuando se enviar el formulario
  const loginSubmit = ( event ) => {

    event.preventDefault();
    
    const lastPath = localStorage.getItem("lastPath") || "/"
    console.log(lastPath)
    login( name )

    navigate( lastPath , {
      replace: true
    })


  };
  

  return (
    <div className="container">
  <div className="heading">SignIn to your account</div>
  <form className="form" onSubmit={ loginSubmit } >
    <div className="input-field">
      <input
        required=""
        autoComplete="off"
        type="text"
        id="username"
        name="name"
        onChange={ onChangeInput }
        value={ name }
      />
      <label htmlFor="username">Full Name</label>
    </div>
    
   
    <div className="btn-container">
      <button className="btn">Submit</button>
      <div className="acc-text">
        New here ?
        <span style={{ color: "#0000ff", cursor: "pointer" }}>
          Create Account
        </span>
      </div>
    </div>
  </form>
</div>

  )
}
