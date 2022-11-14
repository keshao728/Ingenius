import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal';
import "./LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const onCloseModal = () => {
    setEmail("")
    setPassword("")
    setShowModal(false);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <button className="login-button" onClick={() => setShowModal(true)}>SIGN IN</button>
      {showModal && (
        <Modal onClose={() => onCloseModal()}>
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='login-form-wrapper'>
              <div className='login-form-child'>

                <div className='login-message'> Sign In </div>
                <div className='login-input-box'>
                  <input
                    name='email'
                    type='text'
                    value={email}
                    onChange={updateEmail}
                    required
                  />
                  <label htmlFor='email'>Email</label>
                </div>
                <div className='login-input-box'>
                  <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={updatePassword}
                    required
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <div className='submit-login-wrapper'>
                <button className='submit-login-button' type='submit'>Sign In</button>
              </div>
              <div className="demo-user">
                <div className='login-or'>
                  or
                </div>
                <button className='demo-login-button'
                  type="submit"
                  onClick={() => {
                    setEmail("demo@aa.io")
                    setPassword("password")
                  }}>
                  Demo User
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )
      }
    </>
  );
};

export default LoginForm;
