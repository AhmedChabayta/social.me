import { IUser } from "@src/types";
import axios from "axios";
import { Session } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from ".";
import { Image } from "sanity";

export type CreateOrGetUser = {
  firstName: string;
  lastName: string;
  email: string;
  image: Image;
};

export const createOrGetUser = async (user: CreateOrGetUser) => {
  const { firstName, lastName, email, image } = user;
  console.log(image._id);
  const _user = {
    _id: uuidv4(),
    _type: "user",
    firstName: firstName,
    lastName: lastName,
    email: email,
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: image?._id,
      },
    },
  };

  let status: number = 0; // Initialize with a default value

  await axios.post(`${BASE_URL}/api/register`, _user).then((response) => {
    status = response.status;
  });

  return status;
};
