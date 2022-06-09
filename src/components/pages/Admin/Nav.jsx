import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

import { logout } from '../../../actions/auth';
import { clearMessage } from '../../../actions/message';

import { history } from '../../../helpers/history';

// import AuthVerify from "./common/AuthVerify";
import EventBus from '../../../common/EventBus';
import './Admin.css';
import { Dropdown } from 'react-bootstrap';

function NavList() {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-light">
            <i className="navbar-toggler-icon"></i>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>
          <div className="form-inline">
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul className="navbar-nav ml-auto">
              &nbsp; &nbsp;
              <span className="custom-account mr-3">U</span>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {currentUser.fullname}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {showAdminBoard && (
                    <Dropdown.Item>
                      <Link to={'/admin'}>Admin</Link>
                    </Dropdown.Item>
                  )}
                  {currentUser && (
                    <>
                      <Dropdown.Item>
                        <Link to={'/user'}>User</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to={'/'}>{currentUser.fullname}</Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logOut}>
                        <Link to={'/login'}>Logout</Link>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavList;
