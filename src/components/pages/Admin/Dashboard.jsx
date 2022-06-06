import React from 'react';
import DataTable from 'react-data-table-component';
import './Admin.css';

function Dashboard() {
  let userRental = [];
  let carRental = [];

  const listOrder = [
    {
      name: 'No',
      selector: (row) => row.id,
    },
    {
      name: 'User Email',
      selector: (row) => row.email,
    },
    {
      name: 'Car',
      selector: (row) => row.car,
    },
    {
      name: 'Start Rent',
      selector: (row) => row.start,
    },
    {
      name: 'Finish Rent',
      selector: (row) => row.finish,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
    },
  ];

  const listCar = [
    {
      name: 'No',
      selector: (row) => row.id,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
    },
    {
      name: 'Start Rent',
      selector: (row) => row.start,
    },
    {
      name: 'Finish Rent',
      selector: (row) => row.finish,
    },
    {
      name: 'Created at',
      selector: (row) => row.created,
    },
    {
      name: 'Update at',
      selector: (row) => row.updated,
    },
  ];

  for (let i = 1; i <= 50; i++) {
    let obj = {};
    obj['id'] = [i];
    obj['email'] = 'User Email';
    obj['car'] = 'Car';
    obj['start'] = 'Start Rent';
    obj['finish'] = 'Finish Rent';
    obj['price'] = 'Price';
    obj['status'] = 'Status';

    userRental.push(obj);
  }

  for (let i = 1; i <= 50; i++) {
    let obj = {};
    obj['id'] = [i];
    obj['name'] = 'Name';
    obj['category'] = 'Category';
    obj['price'] = 'Price';
    obj['start'] = 'Start Rent';
    obj['finish'] = 'Finish Rent';
    obj['created'] = 'Created at';
    obj['updated'] = 'Updated at';

    carRental.push(obj);
  }

  return (
    <div>
      <div className="container-fluid" id="main-page">
        <div className="row">
          <div className="col-md-12">
            <p className="text-dark custom-font-1">
              <span className="font-weight-bold text-dark">
                Dashboard &gt;{' '}
              </span>
              Dashboard
            </p>
            <h6 className="font-weight-bold custom-font-2">Dashboard</h6>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">List Order</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <DataTable
                pagination
                highlightOnHover
                columns={listOrder}
                data={userRental}
              />
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">List Car</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <DataTable
                pagination
                highlightOnHover
                columns={listCar}
                data={carRental}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
