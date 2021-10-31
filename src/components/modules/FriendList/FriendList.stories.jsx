import React from 'react';
import FriendList from './FriendList';

export default {
  title: 'Modules/FriendList',
  component: FriendList,
};

const Template = (args) => <FriendList {...args} />;

export const Primary = Template.bind({});
