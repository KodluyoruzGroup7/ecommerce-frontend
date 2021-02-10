import React from 'react';

import Rating from './Rating';

export default {
  component: Rating,
  title: 'Components/UI/Rating',
};

const Template = (args) => <Rating {...args} />;

export const Empty = Template.bind({});

Empty.args = {
  value: 0,
  numberOfReviews: 0,
  color: '#f8e825',
};

export const Half = Template.bind({});

Half.args = {
  ...Empty.args,
  value: 3.5,
  numberOfReviews: 1,
};
export const Full = Template.bind({});

Full.args = {
  ...Empty.args,
  value: 5,
  numberOfReviews: 3,
};
