import API from '@aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Storage from '@aws-amplify/storage';

export async function listPosts() {
  const postsData = await API.graphql({ query: queries.listPosts });
  return postsData.data.listPosts.items.map((post) => {
    const {
      description,
      image,
      likes,
      user: { username, profileImg },
    } = post;
    return {
      description,
      image,
      likes,
      user: { username, profileImg },
    };
  });
}

export async function createPost(description, image, userId, location) {
  const newPostInput = {
    description,
    image,
    postUserId: userId,
    location,
  };

  await API.graphql({
    query: mutations.createPost,
    variables: { input: newPostInput },
  });
}
