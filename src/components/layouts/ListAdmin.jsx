import React, { Fragment } from 'react';
import Nav from '../pages/Admin/Nav';
import SideBar from '../pages/Admin/SideBarList';
import Adminitrator from '../pages/Admin/ListCar';
import store from '../../store';
import { getAllCars } from '../../actions/car';

function ListAdmin() {
  store.dispatch(getAllCars());
  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Nav />
          <Adminitrator />
        </div>
      </div>
    </Fragment>
  );
}

export default ListAdmin;
