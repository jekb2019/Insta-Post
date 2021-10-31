import React from 'react';
import Post from './Post';

export default {
  title: 'Modules/Post',
  component: Post,
  args: {},
};

const Template = (args) => <Post {...args} />;

export const NotOwned = Template.bind({});

export const Owned = Template.bind({});
Owned.args = {
  isOwner: true,
};
