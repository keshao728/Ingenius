import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <div id='pp-cover-content-footer-container'>
        <div id='pp-cover'>
        <strong>User Id</strong> {userId}

          <div id='pp-pic-container'></div>
          <div></div>
        </div>
        <div id='pp-content'>
          <div id='pp-status'></div>
          <div id='pp-contributions'>
            <div>
              {/* {Object.values(annotations).map(annotation => {
              <div id='ppa-container'>
                <div id='ppa-created-at'></div>
                <div id='ppa-song-info'></div>
                <div id='ppa-selected-lyric'></div>
                <div id='ppa-user-contribution'></div>
              </div>
            })} */}
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