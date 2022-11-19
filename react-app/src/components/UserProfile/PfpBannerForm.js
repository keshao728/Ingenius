import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editAnnotation, editUserPhoto, getUserInfo } from '../../store/session';
import './pfpBanner.css'
import defaultPro from '../UserProfile/Profile-Images/defaultpro.png'
const ImageForm = ({ setShowEdit, userInfo }) => {
  const dispatch = useDispatch()

  // const [user, setUser] = useState({})
  let [image, setImage] = useState(userInfo.profile_img)
  // let [banner, setBanner] = useState(userInfo.banner_img)
  const [validationErrors, setValidationErrors] = useState([])
  const [showErrors, setShowErrors] = useState(false);

  // const { userId } = useParams();
  const uploadImage = (e) => setImage(e.target.value);
  // const uploadBanner = (e) => setBanner(e.target.value);

  useEffect(() => {
    const errors = []
    if (image && !image.match(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi)) errors.push('"Please enter a valid URL ending with png, gif, webp, jpeg, or jpg"')
    // if (image==='') image=defaultPro

    // if (banner && !image.match(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi)) errors.push('"Please enter a valid URL ending with png, gif, webp, jpeg, or jpg"')

    setValidationErrors(errors)
  }, [image])

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId])

  // if (!user) {
  //   return null;
  // }

  // console.log('imageeeinggng', image)
  // console.log('bannnannerner', banner)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true)

    if (!validationErrors.length) {
      const user = {
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email,
        profile_img: image,
        // banner_img: banner
      }

      let res = await dispatch(editUserPhoto(user))
      console.log('RESRESRESRES', res)
      if (res) {
        console.log('222222222222RES', res)
        setShowEdit(true)
      }
    }
  }
  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowEdit(true)
  };

  return (
    <div id='pfp-edit-container'>
      <form className="edit-profile-wrapper" onSubmit={handleSubmit} spellCheck="false">
        <div className='edit-profile-text'>
          Edit Profile
        </div>
        <input
          className='edit-profile-input'
          type='url'
          placeholder='Profile Photo (URL)'
          value={image}
          onChange={uploadImage} />
        {/* <input
          className='edit-profile-input'
          type='url'
          placeholder='Banner Photo (URL)'
          value={banner}
          onChange={uploadBanner} /> */}
        <div>
          <button className='save-edit-profile' type='submit'>Save</button>
          <button className="cancel-edit-profile" type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
        <div>
          <ul>
            {showErrors && validationErrors.length > 0 && validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  )


}

export default ImageForm
