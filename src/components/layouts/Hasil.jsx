import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../pages/Header';
import HasilCari from '../pages/HasilCari';
import Footer from '../pages/Footer';
import store from '../../store';
import { getCars, getCarsNull } from '../../actions/car';

export default function Hasil() {
  const params = useParams();
  useEffect(() => {
    if (params.tipe === 'true') {
      store.dispatch(getCars(true));
    } else if (params.tipe === 'false') {
      store.dispatch(getCars(false));
    } else {
      store.dispatch(getCarsNull());
    }
  }, [params]);

  return (
    <Fragment>
      <Header />
      <HasilCari />
      <Footer />
    </Fragment>
  );
}
