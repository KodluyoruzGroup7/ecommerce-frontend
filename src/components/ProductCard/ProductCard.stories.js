import React from 'react';

import ProductCard from './ProductCard';

export default {
  component: ProductCard,
  title: 'Components/ProductCard/ProductCard',
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
