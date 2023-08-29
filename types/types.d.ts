export type Image = {
  asset: {
    _id: string;
    url: string;
  };
};

export type Video = {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
export type User = {
  _createdAt: string | Date;
  following: any;
  notifications: any;
  location: any;
  website: any;
  _id: string;
  email: any;
  image: Image;
  bio: any;
  interests: any;
  userName: string;
  followers: any;
  posts: any;
  messages: any;
};
export type UserPostsQuery = Array<{
  videos?: Array<{
    asset: {
      _id: string;
      url: string;
    };
  }>;
  images: Array<{
    asset: {
      _id: string;
      url: string;
    };
  }>;
  userId: string;
  postedBy: {
    _id: string;
    userName: string;
    image: {
      _type: string;
      asset: {
        _type: string;
        _ref: string;
      };
    };
  };
  likes: Array<{
    _ref: string;
    _type: string;
    _key: string;
  }>;
  comments?: Array<{
    comment: string;
    _key: string;
    postedBy: {
      _id: string;
      userName: string;
      image: {
        _type: string;
        asset: {
          _type: string;
          _ref: string;
        };
      };
    };
  }>;
  _id: string;
  caption: string;
}>;

export type UserLikedQuery = Array<{
  images: Array<{
    asset: {
      _id: string;
      url: string;
    };
  }>;
  videos: Array<{
    asset: {
      _id: string;
      url: string;
    };
  }>

  userId: string;
  postedBy: {
    _id: string;
    userName: string;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  likes: Array<{
    _ref: string;
    _type: string;
    _key: string;
  }>;
  comments?: Array<{
    comment: string;
    _key: string;
    postedBy: {
      _id: string;
      userName: string;
      image: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
    };
  }>;
  _id: string;
  caption: string;
  video: any;
}>;
