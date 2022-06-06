import React, { Fragment } from 'react';
import Nav from '../pages/Admin/Nav';
import SideBar from '../pages/Admin/SideBarList';
import AddCar from '../pages/Admin/AddNewCar';

export default function AddNewCar() {
  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Nav />
          <AddCar />
        </div>
      </div>
    </Fragment>
  );
}
