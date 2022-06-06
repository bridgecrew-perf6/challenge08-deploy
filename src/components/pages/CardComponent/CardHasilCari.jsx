import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CardHasilCari({ data }) {
  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return (
    <>
      <div className="col-lg-4 mb-3 d-flex align-items-stretch">
        <div className="card p-2" style={{ width: '22rem' }}>
          <div className="d-flex justify-content-center">
            <img
              src={data.image}
              className="card-img-top p-2 w-cars"
              alt="Binar Rental Car"
              style={{ width: '270px', height: '160px' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text font-weight-bold">
              {formatter.format(data.price)} / hari
            </p>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              libero at molestiae dignissimos quisquam mollitia.
            </p>
            <p className="card-text">
              <FontAwesomeIcon className="fa-fw" icon={faUser} /> 4 Orang
            </p>
            <p className="card-text">
              <FontAwesomeIcon className="fa-fw" icon={faCog} /> Manual
            </p>
            <p className="card-text">
              <FontAwesomeIcon className="fa-fw" icon={faCalendar} /> Tahun 2020
            </p>
            <Link
              className="btn btn-block btn-success"
              to={`/detail-mobil/${data.id}`}
            >
              Pilih Mobil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
