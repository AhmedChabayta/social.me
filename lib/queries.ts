export const allPostsQuery = () => {
  const query = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  caption,
  _createdAt,
  videos[]{
    asset->{
      _id,
      url,
      _type
    }
  },
  images[] {
    asset->{
      _id,
      url
    }
  },
  postedBy->{
    _id,
    userName,
    firstName,
    lastName,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  likes[]->{
    _id,
    userName,
    firstName,
    lastName,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  comments[]{
    _id,
    comment,
    postedBy->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
  },
  topic,
}`;

  return query;
};

export const postDetailQuery = (postId: string | string[]) => {
  const query = `*[_type == "post" && _id == '${postId}'] {
    _id,
    caption,
    video {
      asset->{
        _id,
        url
      }
    },
    image {
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
        _id,
      },
    }
  }`;
  return query;
};

export const searchPostsQuery = (searchTerm: string | string[]) => {
  const query = `*[_type == "post" && (caption match '${searchTerm}*' || topic match '${searchTerm}*')] {
    _id,
    caption,
    video {
      asset->{
        _id,
        url
      }
    },
    image {
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        firstName,
        lastName,
        image
      },
    }
  }`;
  return query;
};

export const singleUserQuery = (userId: string | string[]) => {
  const query = `*[_type == "user" && _id == '${userId}'] {
    _id,
    userName,
    firstName,
    lastName,
    email,
    _createdAt,
    image{
      asset->{
        url,
        _id
      }
    },
    bio,
    followers[]->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
    following[]->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
    posts[]->{
      _id,
      caption,
      videos[] {
        asset->{
          _id,
          url
        }
      },
      images[] {
        asset->{
          _id,
          url
        }
      },
      userId,
      postedBy->{
        _id,
        userName,
        firstName,
        lastName,
        image
      },
      likes,
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          firstName,
          lastName,
          image
        },
      }
    },
    messages[]->{
      _id,
      content,
      sender->{
        _id,
        userName,
        firstName,
        lastName,
        image
      },
    },
    notifications[]->{
      _id,
      message,
      date,
      read
    },
    location,
    website,
    interests
  }`;

  return query;
};

export const allUsersQuery = () => {
  const query = `*[_type == "user"] {
    _id,
    userName,
    firstName,
    lastName,
    email,
    image,
    bio,
    followers[]->{
      _id
    },
    following[]->{
      _id
    },
    posts[]->{
      _id
    },
    messages[]->{
      _id
    },
    notifications[]->{
      _id
    },
    location,
    website,
    interests
  }`;

  return query;
};

export const userCreatedPostsQuery = (userId: string | string[]) => {
  const query = `*[ _type == 'post' && postedBy->_id == '${userId}'] | order(_createdAt desc) {
    _id,
    caption,
    videos[] {
      asset->{
        _id,
        url
      }
    },
    images[] {
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
       firstName,
      lastName,
      image
    },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        firstName,
        lastName,
        image
      },
    }
  }`;

  return query;
};

export const userLikedPostsQuery = (userId: string | string[]) => {
  const query = `*[_type == 'post' && '${userId}' in likes[]._ref] | order(_createdAt desc) {
    _id,
    caption,
    videos[] {
      asset->{
        _id,
        url
      }
    },
    images[] {
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        firstName,
        lastName,
        image
      },
    }
  }`;

  return query;
};

export const topicPostsQuery = (topic: string | string[]) => {
  const query = `*[_type == "post" && topic match '${topic}*'] {
    _id,
    caption,
    video {
      asset->{
        _id,
        url
      }
    },
    image {
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      firstName,
      lastName,
      image
    },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        firstName,
        lastName,
        image
      },
    }
  }`;

  return query;
};
