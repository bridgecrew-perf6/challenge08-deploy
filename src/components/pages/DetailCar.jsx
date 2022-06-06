import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCog,
  faCalendar,
  faChevronDown,
  faClock,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import car from '../svg/img_car.svg';
import load from '../svg/pacman-loading.svg';
import { useSelector } from 'react-redux';
import ModalImage from 'react-modal-image';
import { Link } from 'react-router-dom';

export default function DetailCar() {
  function useLoadingStatus() {
    const { loading } = useSelector((state) => ({
      ...state.combineReducers,
      ...state.car,
    }));
    return { loading };
  }

  function useData() {
    const { data } = useSelector((state) => ({
      ...state.combineReducers,
      ...state.car,
    }));
    return { data };
  }

  const { loading } = useLoadingStatus();
  const { data } = useData();
  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <>
      <div className="bg-lightGrey">
        <div className="container-fluid" id="top">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="align-self-center">
                <div className="gap">
                  <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                </div>
                <div className="gap-2">
                  <div className="text-justify">
                    <p>
                      Selamat datang di Binar Car Rental. Kami menyediakan mobil
                      kualitas terbaik dengan harga terjangkau. Selalu siap
                      melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <button className="btn btn-success px-4">
                      Mulai Sewa Mobil
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding-hero">
              <div className="d-flex justify-content-end">
                <img className="img-fluid" src={car} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <form className="form-custom-1">
          <p className="font-weight-bold">Pencarianmu</p>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="tipe-driver">Tipe Driver</label>
                <div className="input-group">
                  <select
                    className="custom-select"
                    id="tipe-driver"
                    disabled
                  ></select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <FontAwesomeIcon className="fa-fw" icon={faChevronDown} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="tanggal">Tanggal</label>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="tanggal"
                    disabled
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <FontAwesomeIcon className="fa-fw" icon={faCalendar} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="waktu-jemput">Waktu Jemput/Ambil</label>
                <div className="input-group">
                  <select
                    className="custom-select"
                    id="waktu-jemput"
                    disabled
                  ></select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <FontAwesomeIcon className="fa-fw" icon={faClock} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="jumlah-penumpang">
                  Jumlah Penumpang (opsional)
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="jumlah-penumpang"
                    disabled
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <FontAwesomeIcon className="fa-fw" icon={faUsers} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container margin-top-custom">
        <div className="row mt-3">
          <div className="col-lg-8">
            <div className="card p-2">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Tentang Paket</h5>
                <h5 className="font-weight-light">Include</h5>
                <ul className="tentang-paket">
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h5 className="font-weight-light">Exclude</h5>
                <ul className="tentang-paket">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h5 className="card-title font-weight-bold">
                  Refund, Reschedule, Overtime
                </h5>
                <ul className="tentang-paket">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
            <Link to="/pembayaran" className="btn btn-success mt-3 float-right">
              Lanjutkan Pembayaran
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="card p-2" style={{ width: '22rem' }}>
              {loading === 'loading' ? (
                <>
                  <div className="d-flex justify-content-center">
                    <img src={load} alt="" />
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-center">
                    <div className="card-img-top p-2 w-cars">
                      <ModalImage
                        small={data.image}
                        large={data.image}
                        alt="Binar Car Rental"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <div className="row mx-auto">
                      <p className="card-text-custom text-muted mr-3">
                        <FontAwesomeIcon className="fa-fw" icon={faUser} /> 4
                        Orang
                      </p>
                      <p className="card-text-custom text-muted mr-3">
                        <FontAwesomeIcon className="fa-fw" icon={faCog} />{' '}
                        Manual
                      </p>
                      <p className="card-text-custom text-muted mr-3">
                        <FontAwesomeIcon className="fa-fw" icon={faCalendar} />{' '}
                        Tahun 2020
                      </p>
                    </div>
                    <div className="row mt-4 mb-1">
                      <p className="card-text font-weight-light col-6">Total</p>
                      <p className="card-text font-weight-bold col-6">
                        {formatter.format(data.price)}
                      </p>
                    </div>
                    <Link
                      to="/pembayaran"
                      className="btn btn-success btn-block"
                    >
                      Lanjutkan Pembayaran
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
