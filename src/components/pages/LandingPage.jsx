import React from 'react';
// import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import car from '../svg/img_car.svg';
import ic24hrs from '../svg/icon_24hrs.svg';
import iccomplete from '../svg/icon_complete.svg';
import icprice from '../svg/icon_price.svg';
import icpro from '../svg/icon_professional.svg';
import imgService from '../svg/img_service.svg';
import fichevronDown from '../svg/fi_chevron-down.svg';
import img_photo from '../svg/img_photo.svg';
import rate from '../svg/Rate.svg';
import img_cewe from '../svg/img_photo_cewe.svg';
import left from '../svg/left.svg';
import right from '../svg/right.svg';
import useCollapse from 'react-collapsed';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30, 40, 70],
      backgroundColor: ['red', 'green', 'blue', 'yellow', 'purple'],
    },
  ],
  labels: ['HR-V', 'Yaris', 'Avanza', 'Pajero Sport', 'Innova'],
};

function LandingPage() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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
        <div className="row top-service" id="services">
          <div className="col-md-6 d-flex justify-content-end">
            <img className="img-service img-fluid" src={imgService} alt="" />
          </div>
          <div className="col-md-6 ourservices">
            <h2>BestCar Rental for any kind of trip in (Lokasimu)!</h2>
            <div className="text-justify">
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
            </div>
            <ul className="list-service">
              <li>
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </li>
              <li>
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </li>
              <li>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </li>
              <li>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </li>
              <li>
                <p>Layanan Airport Transfer / Drop In Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container" id="whyus">
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="row">
          <div className="col-md-3 d-flex mt-3">
            <div className="card align-self-stretch">
              <div className="card-body">
                <img className="mb-3" src={iccomplete} alt="" />
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex mt-3">
            <div className="card align-self-stretch">
              <div className="card-body">
                <img className="mb-3" src={icprice} alt="" />
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex mt-3">
            <div className="card align-self-stretch">
              <div className="card-body">
                <img className="mb-3" src={ic24hrs} alt="" />
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex mt-3">
            <div className="card align-self-stretch">
              <div className="card-body">
                <img className="mb-3" src={icpro} alt="" />
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-5" style={{ width: '30%', height: '30%' }}>
        <Pie data={data} />
      </div>
      {/* Dibawah ini harusnya owlcarousel */}
      <div className="container" id="testimonial">
        <div className="text-center">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={30}
        center
        responsiveClass
        dots={false}
        nav
        navText={[`<img src='${left}'>`, `<img src='${right}'>`]}
        responsive={{
          0: {
            items: 1,
            nav: true,
            loop: true,
          },
          576: {
            items: 1,
            nav: true,
            loop: true,
          },
          768: {
            items: 2,
            nav: true,
            loop: true,
          },
          1000: {
            items: 2,
            nav: true,
            loop: true,
          },
        }}
      >
        <div className="item">
          <div className="rounded-testimonial bg-lightGrey">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center">
                <div className="align-self-center">
                  <img className="avatar" src={img_photo} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="star">
                  <img className="rate" src={rate} alt="" />
                </div>
                <p className="font text-justify">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h4 className="font">John Dee 32, Bromo</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="rounded-testimonial bg-lightGrey">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center">
                <div className="align-self-center">
                  <img className="avatar" src={img_cewe} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="star">
                  <img className="rate" src={rate} alt="" />
                </div>
                <p className="font text-justify">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h4 className="font">John Dee 32, Bromo</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="rounded-testimonial bg-lightGrey">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center">
                <div className="align-self-center">
                  <img className="avatar" src={img_photo} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="star">
                  <img className="rate" src={rate} alt="" />
                </div>
                <p className="font text-justify">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h4 className="font">John Dee 32, Bromo</h4>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      {/* Diatas ini harusnya owlcarousel */}
      <div className="container" id="cta">
        <div className="card rounded-cta bg-darkBlue text-white text-center">
          <div className="card-title">
            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              fugit, mollitia necessitatibus libero amet aliquid! Optio sit
              magnam, mollitia quis sint natus consequuntur debitis, quisquam
              qui blanditiis eos dolor fugiat!
            </p>
            <button className="btn btn-success mt-3 px-4">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="faq">
        <div className="row">
          <div className="col-md-6">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-md-6">
            <div id="accordion">
              <div className="card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-light w-100"
                      {...getToggleProps()}
                    >
                      <span className="float-left custom-user-font">
                        {isExpanded
                          ? 'Apa saja syarat yang dibutuhkan?'
                          : 'Apa saja syarat yang dibutuhkan?'}
                      </span>
                      <span className="float-right">
                        <img src={fichevronDown} alt="Down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div {...getCollapseProps()}>
                  <div className="card-body custom-user-font">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque, asperiores.
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-light w-100"
                      {...getToggleProps()}
                    >
                      <span className="float-left custom-user-font">
                        {isExpanded
                          ? 'Berapa hari minimal sewa mobil lepas kunci?'
                          : 'Berapa hari minimal sewa mobil lepas kunci?'}
                      </span>
                      <span className="float-right">
                        <img src={fichevronDown} alt="Down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div {...getCollapseProps()}>
                  <div className="card-body custom-user-font">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque, asperiores.
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-light w-100"
                      {...getToggleProps()}
                    >
                      <span className="float-left custom-user-font">
                        {isExpanded
                          ? 'Berapa hari sebelumnya sabaiknya booking sewa mobil?'
                          : 'Berapa hari sebelumnya sabaiknya booking sewa mobil?'}
                      </span>
                      <span className="float-right">
                        <img src={fichevronDown} alt="Down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div {...getCollapseProps()}>
                  <div className="card-body custom-user-font">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas, hic!
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-light w-100"
                      {...getToggleProps()}
                    >
                      <span className="float-left custom-user-font">
                        {isExpanded
                          ? 'Apakah Ada biaya antar-jemput?'
                          : 'Apakah Ada biaya antar-jemput?'}
                      </span>
                      <span className="float-right">
                        <img src={fichevronDown} alt="Down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div {...getCollapseProps()}>
                  <div className="card-body custom-user-font">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque, asperiores.
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-light w-100"
                      {...getToggleProps()}
                    >
                      <span className="float-left custom-user-font">
                        {isExpanded
                          ? 'Bagaimana jika terjadi kecelakaan?'
                          : ' Bagaimana jika terjadi kecelakaan?'}
                      </span>
                      <span className="float-right">
                        <img src={fichevronDown} alt="Down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div {...getCollapseProps()}>
                  <div className="card-body custom-user-font">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque, asperiores.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
