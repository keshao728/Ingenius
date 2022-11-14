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
        <Modal onClose={() => setShowModal(false)}>
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
                    className='login-input'
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                  />
                  <label htmlFor='email'>Email</label>
                </div>
                <div className='login-input-box'>
                  <input
                    className='login-input'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <button type='submit'>Login</button>
            </div>
          </form>
        </Modal>
      )
      }
    </>
  );
};

export default LoginForm;
