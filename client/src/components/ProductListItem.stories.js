import React from 'react';

import ProductListItem from './ProductListItem';

export default {
  component: ProductListItem,
  title: 'ProductListItem',
};

const Template = args => <ProductListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {"id":1,"price":"$87.68","name":"Amitriptyline Hydrochloride","description":"synergize efficient metrics","imageUrl":"http://dummyimage.com/307x328.bmp/ff4444/ffffff"},
};

export const Pinned = Template.bind({});
Pinned.args = {
  item: {"id":2,"price":"$58.53","name":"Zicam","description":"repurpose world-class metrics","imageUrl":"http://dummyimage.com/345x342.jpg/dddddd/000000"},
};
