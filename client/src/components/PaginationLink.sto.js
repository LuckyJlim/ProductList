import React from 'react';
import PaginationLink from './PaginationLink';

export default {
  component: PaginationLink,
  title: 'PaginationLink',
};

const Template = args => <PaginationLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxItem: 8,
};
