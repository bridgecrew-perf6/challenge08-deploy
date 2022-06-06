import React, { Fragment } from 'react';
import Nav from '../pages/Admin/Nav';
import SideBar from '../pages/Admin/SideBarList';
import Edit from '../pages/Admin/EditCar';

export default function EditCar() {
  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Nav />
          <Edit />
        </div>
      </div>
    </Fragment>
  );
}
