import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/layouts/Login';
/**
 * 2. Komponen register yang di import dari folder components
 * */
import Register from './components/layouts/Register';
import Home from './components/layouts/Index';
// import Profile from './components/Profile';
import BoardUser from './components/layouts/User';
import Hasil from './components/layouts/Hasil';
import Detail from './components/layouts/Detail';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
// import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/layouts/Dashboard';
import ListAdmin from './components/layouts/ListAdmin';
import AddNewCar from './components/layouts/AddNewCar';
import EditCar from './components/layouts/EditCar';
import Invoice from './components/layouts/Invoice';

import { history } from './helpers/history';

// import AuthVerify from "./common/AuthVerify";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/hasil-pencarian/:tipe" component={Hasil} />
          <Route path="/detail-mobil/:id" component={Detail} />
          <Route path="/lists" component={ListAdmin} />
          <Route path="/add-new-car" component={AddNewCar} />
          <Route path="/edit-car" component={EditCar} />
          <Route path="/pembayaran" component={Invoice} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          {currentUser ? (
            <Route path="/user" component={BoardUser} />
          ) : (
            <Route path="/user" component={ErrorPage} />
          )}
          {currentUser ? (
            <Route path="/admin" component={BoardAdmin} />
          ) : (
            <Route path="/admin" component={ErrorPage} />
          )}
          {/* <Route path="/mod" component={BoardModerator} /> */}
          {/* <Route path="/admin" component={BoardAdmin} /> */}
        </Switch>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};

export default App;
