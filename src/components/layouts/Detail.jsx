import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../pages/Header';
import DetailCar from '../pages/DetailCar';
import Footer from '../pages/Footer';
import store from '../../store';
// import { getCarsDetail } from '../../redux/car';
import { getCarsDetail } from '../../actions/car';

export default function Detail() {
  const params = useParams();

  useEffect(() => {
    store.dispatch(getCarsDetail(params.id));
  });

  return (
    <Fragment>
      <Header />
      <DetailCar />
      <Footer />
    </Fragment>
  );
}
