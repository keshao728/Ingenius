import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserAnnotations from './UserProfile';
import EditAnnotation from './AnnotationEditForm/EditAnnotationForm';
import './UserProfile/UserProfile.css'

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

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
      {/* <div id='pp-cover'></div> */}
        <div id='pp-top-content-footer-container'>
          <div id='pp-top'>
            <strong>User Id</strong> {userId}
            {/* <div>
            </div> */}

          </div>
          <div id='pp-content'>
            <div id='pp-left'>
            <div id='pp-pic-container'></div>

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
