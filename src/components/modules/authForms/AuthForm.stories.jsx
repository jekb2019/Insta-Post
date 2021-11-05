import React from 'react';
import BasicButton from '../../elements/BasicButton/BasicButton';
import AuthForm from './AuthForm';

export default {
  title: 'Modules/AuthForm',
  component: AuthForm,
};

const Template = (args) => <AuthForm {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  type: 'signin',
};

export const Signup = Template.bind({});
Signup.args = {
  type: 'signup',
};

export const ConfirmSignup = Template.bind({});
ConfirmSignup.args = {
  type: 'confirm-signup',
};
