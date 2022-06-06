import React, { Fragment } from 'react';
import Nav from '../pages/Admin/Nav';
import SideBar from '../pages/Admin/SideBar';
import AdminDashboard from '../pages/Admin/Dashboard';

function Dashboard() {
  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Nav />
          <AdminDashboard />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
