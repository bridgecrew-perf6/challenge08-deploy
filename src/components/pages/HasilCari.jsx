import React, { useEffect, useState } from 'react';
import car from '../svg/img_car.svg';
import load from '../svg/pacman-loading.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardHasilCari from './CardComponent/CardHasilCari';

export default function HasilCari() {
  /**
   ** Selector untuk mengambil state dari store,
   ** dibawah ini merupakan selector custom untuk
   ** mengambil data dari combine reducer
   */
  const { data, loading } = useSelector((state) => state.car);

  //* Untuk mencari form mobilnya lagi
  const [tipeDriver, setTipeDriver] = useState(null);

  useEffect(() => {}, [tipeDriver]);

  const tipeDriverOnChange = (e) => {
    e.preventDefault();
    if (e.target) {
      setTipeDriver(e.target.value);
    }
  };
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
                <select
                  className="custom-select clickable"
                  id="tipe-driver"
                  onChange={tipeDriverOnChange}
                >
                  <option defaultChecked>Pilih Driver</option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="tanggal">Tanggal</label>
                <input type="date" className="form-control" id="tanggal" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="waktu-jemput">Waktu Jemput/Ambil</label>
                <select className="custom-select" id="waktu-jemput">
                  <option defaultValue>Pilih Driver</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="jumlah-penumpang">
                  Jumlah Penumpang (opsional)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="jumlah-penumpang"
                  placeholder="Jumlah penumpang"
                />
              </div>
            </div>
            <div className="col-1 my-auto mx-auto">
              <Link
                className="btn btn-sm btn-success"
                to={`/hasil-pencarian/${tipeDriver}`}
              >
                Cari Mobil
              </Link>
            </div>
          </div>
        </form>
      </div>
      {loading === 'loading' ? (
        <>
          <div className="container margin-top-custom d-flex justify-content-center">
            <img src={load} alt="" />
          </div>
        </>
      ) : data === null ? (
        <>
          <div className="container margin-top-custom d-flex justify-content-center">
            <h1 className="display-4">--Data tidak ditemukan--</h1>
          </div>
        </>
      ) : (
        <>
          <div className="container margin-top-custom">
            <div className="row mt-3">
              {data.map((lists, idx) => (
                <CardHasilCari data={lists} key={idx} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
