import React from 'react';

import ProductSlider from './ProductSlider';
import { products } from '../../../data';

export default {
  component: ProductSlider,
  title: 'Components/ProductDetail/ProductSlider',
};

const Template = (args) => <ProductSlider {...args} />;

export const Default = Template.bind({});

Default.args = {
  images: products[0].images.showcase,
};
