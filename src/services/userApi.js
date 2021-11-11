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

export async function listUsersWithFilter(filter) {
  const usersData = await API.graphql({
    query: queries.listUsers,
    variables: { filter },
  });
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
  return user;
}

export async function createUser(id, username) {
  const newUserInput = {
    id,
    username,
  };
  await API.graphql({
    query: mutations.createUser,
    variables: { input: newUserInput },
  });
}
