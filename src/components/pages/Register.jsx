import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import HeroLogin from '../svg/hero-login.svg';
import HeroLogin from '../svg/image2.svg';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../../actions/auth';

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This is not a valid email.
        </div>
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      </div>
    );
  }
};

export default function Register() {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeFullName = (e) => {
    const fullname = e.target.value;
    setFullName(fullname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(fullname, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  return (
    <div>
      <div className="container-fluid row">
        <div className="col-lg-9 p-0">
          <img className="img-fluid effect" src={HeroLogin} alt="hero-login" />
        </div>
        <div className="col-lg-3 my-auto mx-auto">
          <div className="container">
            <div className="kotak-auth"></div>
            <h3 className="mb-5 font-weight-bold">Create new Account</h3>
            {message && (
              <div className="form-group mt-2">
                <div
                  className={
                    successful
                      ? 'alert alert-success mx-auto'
                      : 'alert alert-danger mx-auto'
                  }
                  role="alert"
                >
                  {message}
                </div>
                {successful ? (
                  <Link className="btn btn-primary w-100 mt-2" to={'/login'}>
                    Click here to login!
                  </Link>
                ) : null}
              </div>
            )}
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <>
                  <div className="form-group">
                    <label htmlFor="fullname">Name</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="fullname"
                      value={fullname}
                      onChange={onChangeFullName}
                      validations={[required]}
                      placeholder="Input your fullname..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                      placeholder="Input your email..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                      placeholder="Input your password..."
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary w-100 mt-3">
                      Sign Up
                    </button>
                  </div>
                  <Link className="btn w-100 mt-2" to={'/login'}>
                    Already have an Account? Login
                  </Link>
                </>
              )}
              <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
