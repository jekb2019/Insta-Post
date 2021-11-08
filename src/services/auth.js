/**
 * Potential Usage:
 *  - auth related jobs
 *  - Checking if user is logged in
 *  - Getting current logged in user data
 */

import { Auth } from 'aws-amplify';

/**
 * SIGN UP TO Service
 * @param {*} username
 * @param {*} password
 * @param {*} email
 */
export async function signUp(username, password, email) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log(user);
  } catch (err) {
    throw new Error('error signing up: ', err);
  }
}

/**
 * COMFIRM SIGN UP
 * @param {*} username
 * @param {*} code
 */
export async function confirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Re-send confirmation code
 * @param {*} username
 * @param {*} password
 * @returns
 */

export async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}

/**
 * SIGN IN
 * @param {*} username
 * @param {*} password
 * @returns
 */
export async function signIn(username, password) {
  console.log('Sign in from service');
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (err) {
    return new Error('Error signing in: ', err);
  }
}

/**
 * Signout
 */
export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

/**
 * Retreive Current user
 */

export async function getCurrentAuthUser() {
  try {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: false,
    });
    return user;
  } catch (err) {
    return null;
  }
}