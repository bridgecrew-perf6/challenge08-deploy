import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import { logout } from '../../actions/auth';
import { clearMessage } from '../../actions/message';

import { history } from '../../helpers/history';

// import AuthVerify from "./common/AuthVerify";
import EventBus from '../../common/EventBus';

export default function Header() {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      // setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    } else {
      // setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [currentUser, logOut]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-lightGrey sticky-top">
        <div className="container">
          <Link to={'/'} className="navbar-brand" href="#top">
            <div className="square"></div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link mx-3 active" href="#services">
                Our Services <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link mx-3" href="#whyus">
                Why Us
              </a>
              <a className="nav-link mx-3" href="#testimonial">
                Testimonial
              </a>
              <a className="nav-link mx-3" href="#faq">
                FAQ
              </a>
              {showAdminBoard && (
                <Link to={'/admin'} className="nav-link mx-3">
                  Admin
                </Link>
              )}

              {currentUser && (
                <Link to={'/user'} className="nav-link mx-3">
                  User
                </Link>
              )}
              {currentUser ? (
                <>
                  <Link to={'/'} className="nav-link mx-3">
                    {currentUser.fullname}
                  </Link>
                  <Link
                    to={'/login'}
                    className="btn btn-success mx-3"
                    onClick={logOut}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <Link className="btn btn-success mx-3" to={'/register'}>
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
