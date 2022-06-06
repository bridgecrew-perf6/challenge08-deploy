import React, { Fragment } from 'react';
import FooterLanding from '../pages/FooterLanding';
import Header from '../pages/Header';
import LandingPage from '../pages/LandingPage';

function Index() {
  return (
    <Fragment>
      <Header />
      <LandingPage />
      <FooterLanding />
    </Fragment>
  );
}

export default Index;
