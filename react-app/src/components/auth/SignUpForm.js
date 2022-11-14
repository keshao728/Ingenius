import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { Modal } from '../../context/Modal';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showModal, setShowModal] = useState(false);


  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

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

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <button className="sign-up-button" onClick={() => setShowModal(true)}>SIGN UP</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>

          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>

            <div className='sign-up-form-wrapper'>
              <div className='sign-up-form-child'>

                <div className='sign-up-message'> Sign Up </div>
                <div className='sign-up-input-box'>
                  <label className='sign-up-input-label'>User Name</label>
                  <input
                    className='sign-up-input'
                    type='text'
                    name='username'
                    onChange={updateUsername}
                    value={username}
                    required={true}
                  ></input>
                </div>
                <div className='sign-up-input-box'>
                  <label className='sign-up-input-label'>Email</label>
                  <input
                    className='sign-up-input'
                    type='text'
                    name='email'
                    onChange={updateEmail}
                    value={email}
                    required={true}
                  ></input>
                </div>
                <div className='sign-up-input-box'>
                  <label className='sign-up-input-label'>Password</label>
                  <input
                    className='sign-up-input'
                    type='password'
                    name='password'
                    onChange={updatePassword}
                    value={password}
                    required={true}
                  ></input>
                </div>
                <div className='sign-up-input-box'>
                  <label className='sign-up-input-label'>Repeat Password</label>
                  <input
                    className='sign-up-input'
                    type='password'
                    name='repeat_password'
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                  ></input>
                </div>
              </div>

              <button className='submit-sign-up-button' type='submit'>Sign Up</button>
            </div>
          </form>
        </Modal>
      )}
    </>
  )
};

export default SignUpForm;
