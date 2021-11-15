/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      profileImg
      description
      posts {
        items {
          id
          image
          description
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      name
      profileImg
      description
      posts {
        items {
          id
          image
          description
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      name
      profileImg
      description
      posts {
        items {
          id
          image
          description
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      image
      description
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      location
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      image
      description
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      location
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      image
      description
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      location
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      description
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        image
        description
        user {
          id
          username
          name
          profileImg
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        location
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      description
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        image
        description
        user {
          id
          username
          name
          profileImg
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        location
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      description
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        image
        description
        user {
          id
          username
          name
          profileImg
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        location
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        image
        description
        user {
          id
          username
          name
          profileImg
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        location
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        image
        description
        user {
          id
          username
          name
          profileImg
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        location
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      user {
        id
        username
        name
        profileImg
        description
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        image
        description
        user {
          id
          username
          name
          profileImg
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        location
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
