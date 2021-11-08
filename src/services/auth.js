/**
 * Directly communicate with Amplify Auth for
 *  - current logged in user
 *  - signup
 *  - signin
 *  - signout
 *  - signin confirmations
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
    throw new Error(err);
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
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (err) {
    console.error(err);
    return new Error(err);
  }
}

/**
 * Signout
 */
export async function signOut() {
  try {
    await Auth.signOut();
  } catch (err) {
    console.error(err);
    throw new Error(err);
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
    console.error(err);
    return null;
  }
}
