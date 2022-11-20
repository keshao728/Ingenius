import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { Modal } from '../../context/Modal';
// import LoginForm from '../auth/LoginForm';
import './SignUpForm.css';
import defaultPro from '../UserProfile/Profile-Images/defaultpro.png'

const SignUpForm = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [profile_img, setProfileImg] = useState(defaultPro)
  // const [banner_img, setBannerImg] = useState(defaultPro)
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  // const [showLoginModal, setShowLoginModal] = useState(false);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }
  function isEmpty2(str) {
    return !str.trim().length
  }

  useEffect(async() => {
    const err = [];
    if(!username || isEmpty2(username)) err.push('Please provide a username');
    if(username.length > 15) err.push('Username must be less than 15 characters');
    if(username.length < 3) err.push('Username must be at least 3 characters');
    if(!email || isEmpty2(email)) err.push('Please provide an email');
    if(!email.toLowerCase().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/)) err.push('Please provide a valid email');
    if(isEmpty2(password)) err.push('Please provide a password');
    if (password !== repeatPassword)err.push('Passwords must match')
    if (password.length < 6) err.push('Password must be at least 6 characters')
    if (password.length > 20) err.push('Password length must not exceed 20 characters')
    setErrors(err)
  },[username,email,password,repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();
    setShowErrors(true)
    if (errors.length<1) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
        setShowModal(false)
      }
      return
    }
    setShowErrors(true)
    return
  };

  const onCloseModal = () => {
    setUsername("")
    setEmail("")
    setPassword("")
    setRepeatPassword("")
    setShowModal(false);
  }



  //closes signup and opens login
//   const OpenLogCloseSign=()=>{
//     setShowModal(false)
//     setShowLoginModal(true);
// }




  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <button className="sign-up-button" onClick={() => setShowModal(true)}>SIGN UP</button>
      {showModal && (
        <Modal showModal={showModal} onClose={() => onCloseModal()}>

          <form onSubmit={onSignUp}>
            {showErrors &&(
              <div className='error2'>
                {errors?.map((error, ind) => (
                  <li className='error2msg'key={ind}>{error}</li>
                ))}
              </div>
            )}

            <div className='sign-up-form-wrapper'>
              <div className='sign-up-form-child'>

                <div className='sign-up-message'> Sign Up </div>
                <div
                className='sign-up-input-box'
                >
                  <input
                    className='sign-up-input'
                    type='text'
                    name='username'
                    onChange={updateUsername}
                    value={username}
                    required={true}
                  ></input>
                  <label className='sign-up-input-label'>User Name</label>
                </div>
                <div className='sign-up-input-box'>
                  <input
                    className='sign-up-input'
                    type='text'
                    name='email'
                    onChange={updateEmail}
                    value={email}
                    required={true}
                  ></input>
                  <label className='sign-up-input-label'>Email</label>
                </div>
                <div className='sign-up-input-box'>
                  <input
                    className='sign-up-input'
                    type='password'
                    name='password'
                    onChange={updatePassword}
                    value={password}
                    required={true}
                  ></input>
                  <label className='sign-up-input-label'>Password</label>
                </div>
                <div className='sign-up-input-box'>
                  <input
                    className='sign-up-input'
                    type='password'
                    name='repeat_password'
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                  ></input>
                  <label className='sign-up-input-label'>Repeat Password</label>
                </div>
              </div>
              <button className='submit-sign-up-button'  type='submit'>Sign Up</button>
              {/* disabled={!!errors.length} */}
            </div>
          </form>
              {/* ADD THIS LATER
               <div>
                Already have an account?
                <div>
                <button className="login-button" onClick={() => OpenLogCloseSign()}><LoginForm /> </button>
                  {showLoginModal && (
                    <Modal onClose={() => setShowLoginModal(false)}>
                      <LoginForm />
                    </Modal>
                  )}
                </div>
              </div> */}
        </Modal>
      )}
    </>
  )
};

export default SignUpForm;
