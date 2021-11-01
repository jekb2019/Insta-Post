import React from 'react';
import ProfileNav from './ProfileNav';

export default {
  title: 'Modules/ProfileNav',
  component: ProfileNav,
};

const Template = (args) => <ProfileNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  itemConfigs: [
    {
      label: 'My Page',
      onClick: () => console.log('My Page clicked'),
    },
    {
      label: 'Log out',
      onClick: () => console.log('Log out clicked'),
    },
  ],
};
