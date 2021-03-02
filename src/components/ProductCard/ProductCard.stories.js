import React from 'react';
import { products } from '../../data';
import ProductCard from './ProductCard';

export default {
  component: ProductCard,
  title: 'Components/ProductCard/ProductCard',
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  product: products[0],
};
