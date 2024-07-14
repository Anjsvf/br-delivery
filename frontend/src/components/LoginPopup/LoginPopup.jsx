import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const LoginPopup = ({ setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("entrar")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""

  })

  const onChangeHandler = (event) =>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
           event.preventDefault()
           let newUrl = url
           if (currState==="entrar") {
            newUrl += "/api/user/login"
           }

           else{
            newUrl += "/api/user/register"
           }

           const response  = await axios.post(newUrl,data)
           if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
           }
           else{
            alert(response.data.message)
           }
  }
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin}  className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">

          {currState==="entrar"?<></>: <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='seu nome'required />}
         
          <input name='email' onChange={onChangeHandler} type="email" value={data.email} placeholder='seu email' required/>
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='sua senha'required/>
        </div>
        <button type='submit' >{currState==="inscrever"?"criar conta":"entrar"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>para continuar aceite os termos de uso</p>
        </div>
        {currState==="entrar"
        ?<p>criar uma nova conta?<span onClick={()=>setCurrState("inscrever")}>clique aqui!</span></p>
        :<p>já possui uma conta?<span onClick={()=>setCurrState("entrar")}>entrar</span></p>
        }
       
      </form>
    </div>
  )
}

export default LoginPopup
