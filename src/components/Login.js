import React, { useState } from 'react'
import './login.css'
import logo from '../Assests/Group.png'
import userLogo from '../Assests/user.png'
import lockLogo from '../Assests/lock.png'

const dummyUserCredentials = {
   username: "test@luxpmsoft.com",
   password: "test1234!"
}

const Login = () => {
   const [userState, setUserState] = useState({ username: "", password: "" })
   const [isCorrectCombination, setIsCorrectCombination] = useState(true)
   const { username, password } = userState

   const onChangeUsernameInput = (e) => {
      setUserState({ ...userState, username: e.target.value })
   }
   const onChangePasswordInput = (e) => {
      setUserState({ ...userState, password: e.target.value })
   }

   const onSubmitForm = (e) => {
      e.preventDefault()
      if (password.match(/[!@#$%^&*_=+-]/g) && password.match(/[0-9]/g) && password.match(/[A-Za-z]/g)) {
         setIsCorrectCombination(true)
      } else {
         setIsCorrectCombination(false)
      }
      if ((username === dummyUserCredentials.username) && (password === dummyUserCredentials.password)) {
         return null
      } else {
         alert("the provided password is wrong")
      }
   }

   return (
      <div className='bg-container d-flex flex-column justify-content-center align-items-center'>
         <form className='form-container' onSubmit={onSubmitForm} >
            <div className='d-flex justify-content-center mb-5'>
               <img src={logo} alt="logo" className='form-logo' />
            </div>
            <div className='d-felx justify-content-start align-items-center input-card'>
               <img src={userLogo} size={25} alt='userLogo' />
               <input value={username} className="input" type='text' placeholder="USERNAME" onChange={onChangeUsernameInput} name="username" />
            </div>
            <div className='d-felx justify-content-start align-items-center input-card'>
               <img src={lockLogo} size={25} alt='lockLogo' />
               <input value={password} className="input" type='password' placeholder="PASSWORD" onChange={onChangePasswordInput} name="password" />
            </div>
            {!isCorrectCombination && <p className='p-0 m-0 text-warning'>Wrong Comnination</p>}
            <button type='submit' className='login-btn'>LOGIN</button>
            <p className='text-end' style={{ color: '#fff' }}>Forgot Password?</p>
         </form>
      </div>
   )
}

export default Login