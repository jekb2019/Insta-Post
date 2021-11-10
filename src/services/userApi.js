import API from '@aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

export async function listUsers() {
  const usersData = await API.graphql({ query: queries.listUsers });
  return usersData.data.listUsers.items.map((user) => {
    const { id, username, name, profileImg, description } = user;
    return {
      id,
      username,
      name,
      profileImg,
      description,
    };
  });
}

/**
 * Get user by id
 */
export async function getUserById(id) {
  const user = await API.graphql({
    query: queries.getUser,
    variables: {
      id,
    },
  });
  console.log(id);
}

export async function createUser(id, username) {
  console.log('Create: ', id, username);
  const newUserInput = {
    id,
    username,
  };
  const newUser = await API.graphql({
    query: mutations.createUser,
    variables: { input: newUserInput },
  });
  console.log(newUser);
}
