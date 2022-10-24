import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';
import useUserStore, { selectOnLogout } from '../store/user';

const UserLog = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const onLogout = useUserStore(selectOnLogout);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await onLogout();
    navigate("/login");
  };

  return (user ?
    <>
      <div className="binduz-er-navbar-btn d-flex">
        <div className="binduz-er-widget d-flex">
          <a href="#"> {user.email}</a>
          <a href="#" onClick={handleLogout}>Logout</a>
        </div>
        <span className="binduz-er-toggle-btn binduz-er-news-canvas_open d-block d-lg-none">
          <i className="fal fa-bars"></i>
        </span>
      </div>
    </> :
    <div className="binduz-er-navbar-btn d-flex">
      <div className="binduz-er-widget d-flex">
        <a href={'/login'} key={'login'}>Login</a>
      </div>
      <span className="binduz-er-toggle-btn binduz-er-news-canvas_open d-block d-lg-none">
        <i className="fal fa-bars"></i>
      </span>
    </div>
  );
}
export default UserLog
