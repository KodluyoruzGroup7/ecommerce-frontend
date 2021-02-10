import React from 'react';

import Heading from './Heading';

export default {
  component: Heading,
  title: "Typography/Heading"
};

const Template = (args) => <Heading {...args}>{args.children}</Heading>;

export const Large = Template.bind({});

Large.args = {
  children: "this is large heading with uppercase",
  headingFor: "large",
  upperCase: true,
  centered: true,
  capitalize: false,
}

export const Section = Template.bind({});

Section.args = {
  ...Large.args,
  children: "this is section with centered and uppercase",
  headingFor: "section"
}

export const Card = Template.bind({});

Card.args = {
  ...Large.args,
  children: "card title",
  headingFor: "card",
}

export const Item = Template.bind({});

Item.args = {
  ...Large.args,
  children: "Item title",
  headingFor: "item",
  upperCase: false,
  capitalize: true
}

export const Collection = Template.bind({});

Collection.args = {
  ...Large.args,
  children: "Collection Title",
  headingFor: "collection",
  centered: false,
}


export const Widget = Template.bind({});

Widget.args = {
  ...Large.args,
  children: "widget heading",
  headingFor: "widget",
  centered: false,
}

export const Product = Template.bind({});

Product.args = {
  ...Large.args,
  children: "product title",
  headingFor: "product",
  centered: false,
  upperCase: false,
  capitalize: true,
}


