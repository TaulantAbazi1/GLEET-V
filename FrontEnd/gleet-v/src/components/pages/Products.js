import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import Rezervimi from '../Rezervimi';
import { SliderData } from '../SliderData';

function Products() {
  return (
    <>
      <ImageSlider slides={SliderData}/>
      <Rezervimi/>
      <Footer />
    </>
  );
}

export default Products;
