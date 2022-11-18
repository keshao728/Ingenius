import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserAnnotations from './UserProfile';
import ImageForm from './UserProfile/PfpBannerForm';
// import EditAnnotation from './AnnotationEditForm/EditAnnotationForm';
import './UserProfile/UserProfile.css'

function User() {
  const [user, setUser] = useState({});
  const [showEdit, setShowEdit] = useState(true)
  // const other = useSelector(state => state.session.annotations)
  // const otherUser = other
  // console.log('OTHER', otherUser)

  const { userId } = useParams();
  console.log('iamuser', user)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div id='pp-outer'>
      <div id='pp-cover'>
        <img id='pp-banner-photo' src={user.banner_img} />
      </div>


      <div id='pp-top-content-footer-container'>
        <div id='pp-top'>

          <div id='pp-top-left'>
            <div id='pp-profile-photo-container'>
              <img id='pp-profile-photo' src={user.profile_img} />
            </div>
          </div>
          <div id='pp-top-right'></div>
        </div>
        <div id='pp-content'>

          <div id='pp-left'>
            <div className='pp-div-align'></div>
            <div id='pp-main-username'>@{user.username}</div>
            <div id='pp-pfp-edit-button-container' >
              {showEdit ? <button id='pp-pfp-edit-button' onClick={() => setShowEdit(false)}>
                <img id='pp-pfp-edit-button-pen-image' src={'https://www.pngrepo.com/png/105166/180/edit.png'} />
                Edit
              </button> : <ImageForm setShowEdit={setShowEdit} userInfo={user} />}
            </div>

            <div className='top-div-outer'>
              <div id='white-top-div'>
                {user.username} is keeping quiet for now
              </div>
            </div>
            <div className='top-div-outer'>
              <div className='white-box-text'>STATS</div>
              <div id='blank-white-mid-div'>
                <div>
                  {console.log('USER', user)}
                  {user?.my_annotation?.length} Annotations
                  {user?.my_comment?.length} Comments

                </div>


              </div>
            </div>
            <div className='top-div-outer'>
              <div className='white-box-text'>Some moremore Random Text</div>
              <div id='blank-white-bot-div'></div>
            </div>

          </div>

          <div id='pp-right'>
            <div>
              <div className='user-contributions-title'> {user.username}'s Contributions</div>
              <UserAnnotations />
            </div>
          </div>
        </div>
        <div id='pp-footer'></div>
      </div>

    </div>

  );
}
export default User;



{/* <ul>
<li>
  <strong>User Id</strong> {userId}
</li>
<li>
  <strong>Username</strong> {user.username}
</li>
<li>
  <strong>Email</strong> {user.email}
</li>
</ul> */}
