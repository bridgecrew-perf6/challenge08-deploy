import React, { useState } from 'react';
import car from '../svg/img_car.svg';
import { Link } from 'react-router-dom';

export default function Content() {
  // Mengambil pilihan mobil (status true | false)
  const [tipeDriver, setTipeDriver] = useState(null);
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
        <form className="form-custom" id="form-cars">
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
                <input
                  type="date"
                  className="form-control clickable"
                  id="tanggal"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="waktu-jemput">Waktu Jemput/Ambil</label>
                <select className="custom-select clickable" id="waktu-jemput">
                  <option defaultChecked>Pilih Waktu</option>
                  <option value="1">08.00 WIB</option>
                  <option value="2">09.00 WIB</option>
                  <option value="3">10.00 WIB</option>
                  <option value="4">11.00 WIB</option>
                  <option value="5">12.00 WIB</option>
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
                  className="form-control clickable"
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
    </>
  );
}
