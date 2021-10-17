import React from 'react';

import ProductListItem from './ProductListItem';

export default {
  component: ProductListItem,
  title: 'ProductListItem',
};

const Template = args => <ProductListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride","description":"synergize efficient metrics","product_image":"http://dummyimage.com/307x328.bmp/ff4444/ffffff"},
};

export const Pinned = Template.bind({});
Pinned.args = {
  item: {"id":2,"price":"$58.53","product_name":"Zicam","description":"repurpose world-class metrics","product_image":"http://dummyimage.com/345x342.jpg/dddddd/000000"},
};