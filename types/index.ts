import { Image, User, UserLikedQuery, UserPostsQuery, Video } from "./types";

export interface Post {
  _id: string;
  userId: string;
  _createdAt: Date;
  postedBy: {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
        url: string;
      };
    };
  };
  likes: {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
        url: string;
      };
    };
  }[];
  topic: string;
  caption: string; // Update to an array of captions
  videos: Video[];
  images: Image[];
  comments: {
    _id: string;
    comment: string;
    postedBy: {
      _id: string;
      userName: string;
      firstName: string;
      lastName: string;
      image: {
        _type: "image";
        asset: {
          _ref: string;
          _type: "reference";
          url: string;
        };
      };
    };
  }[];
}

export interface UserCreatedPosts {
  images: Image[] | string;
  userId: string;
  postedBy: {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
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
  comments: Array<{
    comment: string;
    _key: string;
    postedBy: {
      _id: string;
      userName: string;
      firstName: string;
      lastName: string;
      image: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
    };
  }> | null;
  _id: string;
  caption: string;
  videos: Video[] | null;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}

export interface SingleUserProfileAndCreatedAndLiked {
  user: User;
  UserPostsQuery: UserPostsQuery;
  UserLikedQuery: UserLikedQuery;
}
