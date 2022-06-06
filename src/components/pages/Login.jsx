import React, { useState, useRef } from 'react';
// import HeroLogin from '../svg/hero-login.svg';
import HeroLogin from '../svg/image2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import LoginButton from './GoogleButton/LoginButton';

import { login } from '../../actions/auth';

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This field is required!
        </div>
      </div>
    );
  }
};

export default function Login(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push('/');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="container-fluid row">
        <div className="col-lg-9 p-0">
          <img className="img-fluid effect" src={HeroLogin} alt="hero-login" />
        </div>
        <div className="col-lg-3 my-auto">
          <div className="container">
            <div className="kotak-auth"></div>
            <h3 className="mb-5 font-weight-bold">Welcome, Admin BCR</h3>
            {message && (
              <div className="form-group mt-2">
                <div className="alert alert-danger mx-auto" role="alert">
                  {message}
                </div>
              </div>
            )}
            <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={onChangeEmail}
                  validations={[required]}
                  placeholder="johndee@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={onChangePassword}
                  validations={[required]}
                  placeholder="6+ karakter"
                />
              </div>
              <button className="btn btn-primary w-100 mt-3" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Sign In</span>
              </button>
              <LoginButton />
              <Link className="btn w-100 mt-2" to={'/register'}>
                Don't have an account? Register!
              </Link>
              <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
