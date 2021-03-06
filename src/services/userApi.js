import API from '@aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Storage from '@aws-amplify/storage';

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

export async function getUserById(id) {
  const user = await API.graphql({
    query: queries.getUser,
    variables: {
      id,
    },
  });
  return user;
}

export async function getUserByUsername(username) {
  const user = await listUsersWithFilter({
    username: {
      eq: username,
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

export async function updateUser(id, username, name, description, profileImg) {
  const userDetails = {
    id,
    username,
    name,
    description,
    ...(profileImg && { profileImg }),
  };

  console.log(userDetails);
  await API.graphql({
    query: mutations.updateUser,
    variables: { input: userDetails },
  });
}

export async function fetchProfileImg(imageName) {
  let imageFromDB = await Storage.get(imageName);
  return imageFromDB;
}

export async function fetchProfileImgWithUsername(username) {
  const [user] = await listUsersWithFilter({
    username: {
      eq: username,
    },
  });

  if (!user) {
    throw new Error('user does not exist');
  }

  if (!user.profileImg) {
    return null;
  }
  const img = await fetchProfileImg(user.profileImg);
  return img;
}
