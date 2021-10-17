import React from 'react';
import ProductList from './ProductList';
import items from '../products.json';

export default {
  component: ProductList,
  title: 'ProductList',
};

const Template = args => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [...items].slice(0,8),
  maxItem: 8
};

export const LongList = Template.bind({});
LongList.args = {
  items: [...items].slice(0,12),
  maxItem: 12
};