import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserAnnotations from './UserProfile';
import ImageForm from './UserProfile/PfpBannerForm';
// import EditAnnotation from './AnnotationEditForm/EditAnnotationForm';
import './UserProfile/UserProfile.css'
import defaultPro from './UserProfile/Profile-Images/defaultpro.png'
// import editPen from './UserProfile/Profile-Images/editPen.png'

function User() {
  const [user, setUser] = useState({});
  const [showEdit, setShowEdit] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  // const other = useSelector(state => state.session.annotations)
  // const otherUser = other
  // console.log('OTHER', otherUser)

  const { userId } = useParams();
  console.log('USERID', typeof(userId))
  console.log('iamuser', user)
  console.log('sessionUSER', sessionUser)

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
    <div>
      <div id='pp-outer'>
        <div id='pp-cover'>
          <img id='pp-banner-photo' src={user.profile_img} />
        </div>


        <div id='pp-top-content-footer-container'>
          <div id='pp-top'>

            <div id='pp-top-left'>
              <div id='pp-profile-photo-container'>
                <img onError={(e)=> e.target.src=defaultPro} id='pp-profile-photo' src={user.profile_img ? user.profile_img : defaultPro} />
              </div>
            </div>
            <div id='pp-top-right'></div>
          </div>
          <div id='pp-content'>

            <div id='pp-left'>
              <div className='pp-div-align'></div>
              <div id='pp-main-username'>@{user.username}</div>

{/* fix here. access sessionUser Id here somehow */}
              <div>{sessionUser?.id === Number(userId) ?
                <div id='pp-pfp-edit-button-container'>{showEdit ? <button id='pp-pfp-edit-button' onClick={() => setShowEdit(false)}>
                    <img onError={(e)=> e.target.src=defaultPro} id='pp-pfp-edit-button-pen-image' src={'https://www.pngrepo.com/png/105166/180/edit.png'} />
                    Edit
                  </button> : <ImageForm setShowEdit={setShowEdit} userInfo={user} />}
                </div>
                :<div></div>}

{/* {<div>{user.id}</div>}
{<div>{userId}</div>} */}
{/* {<div>{sessionUser}</div>} */}


              </div>


              <div className='top-div-outer'>
                <div id='white-top-div'>
                  {user.username} is keeping quiet for now
                </div>
              </div>
              <div className='top-div-outer'>
                <div className='white-box-text'>STATS</div>
                <div id='white-mid-div-wrapper'>
                  <div className='white-mid-div'>
                    <div className='mid-contents'>
                      <div className='mid-items'>
                        <i className="fa-solid fa-quote-left"></i>
                        <div className='mid-count'>
                          {user?.my_annotation?.length}
                        </div>
                      </div>
                      <div className='mid-item-text'>
                        Annotations
                      </div>
                    </div>

                    <div className='mid-contents'>
                      <div className='mid-items'>
                        <i className="fa-solid fa-comment-dots"></i>
                        <div className='mid-count'>
                          {user?.my_comment?.length}
                        </div>
                      </div>
                      <div className='mid-item-text'>
                        Comments
                      </div>
                    </div>


                    <div className='mid-contents'>
                      <div className='mid-items'>
                        <i className="fa-solid fa-file-arrow-up"></i>
                        <div className='mid-count'>
                          {user?.my_upload?.length}
                        </div>
                      </div>
                      <div className='mid-item-text'>
                        Track Uploads
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* <div className='top-div-outer'>
              <div className='white-box-text'>Some moremore Random Text</div>
              <div id='blank-white-bot-div'></div>
            </div> */}

            </div>

            <div id='pp-right'>
              <div>
                <div className='user-contributions-title'> {user.username}'s Contributions</div>
                <UserAnnotations setUser={setUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='pp-footer'>
        <div className='pp-devs'>
          <div className='individual-devs'>
            <a className='dev-link' href="https://github.com/keshao728" target="_blank" rel="noopener noreferrer">
              Kelly Shao
            </a>
          </div>
          <div className='individual-devs'>
            <a className='dev-link' href="https://github.com/Schaeffy" target="_blank" rel="noopener noreferrer">
              Schaeffer Anh
            </a>
          </div>
          <div className='individual-devs'>
            <a className='dev-link' href="https://github.com/SimonMTan" target="_blank" rel="noopener noreferrer">
              Simon Tan
            </a>
          </div>
          <div className='individual-devs'>
            <a className='dev-link' href="https://github.com/k-rewd" target="_blank" rel="noopener noreferrer">
              Andrew Kim
            </a>
          </div>
        </div>
        <div>© Devs of App Academy</div>
        <div className='project-link'>
          Project Github
        </div>

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
