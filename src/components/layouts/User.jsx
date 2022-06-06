import React, { Fragment, useEffect } from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Content from '../pages/Content';
import BlackTransparent from '../pages/BlackTransparent';

export default function Index() {
  useEffect(() => {
    const clickable = document.querySelector('.clickable');
    const customBody = document.querySelector('.custom-body');
    const unclickable = document.querySelector('.unclickable');
    clickable.addEventListener('click', () => {
      customBody.classList.add('custom-bg-active');
    });
    unclickable.addEventListener('click', () => {
      customBody.classList.remove('custom-bg-active');
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <BlackTransparent />
      <Content />
      <Footer />
    </Fragment>
  );
}
