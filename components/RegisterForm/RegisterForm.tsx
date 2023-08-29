/* eslint-disable @next/next/no-img-element */
"use client";

import { createOrGetUser } from "@src/lib/sanity";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Input from "../Input/Input";

import { PlusIcon } from "@heroicons/react/24/solid";
import { client } from "@src/sanity/lib/client";
import type { Image as SanityImageType } from "sanity";
import { useRouter } from "next/navigation";

type FormTypes = {
  firstName: string;
  lastName: string;
  email: string;
  image: SanityImageType;
  password: string;
};

const RegisterForm = () => {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const memoizedSession = useMemo(() => session, [session]);

  const router = useRouter();

  const [formData, setFormData] = useState<FormTypes>({
    firstName: "",
    lastName: "",
    email: "",
    image: {},
    password: "",
  });

  const [preparedForSanityImage, setPreparedForSanityImage] =
    useState<SanityImageType>();

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleSignInWithGoogle = async (provider: string) => {
    await signIn(provider);
    // .then(() => {
    //   fetchAndLogUserData();
    // });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];

    client.assets
      .upload("image", file, {
        contentType: file.type,
        filename: file.name,
      })
      .then((document) => setPreparedForSanityImage(document))
      .then(() => console.log(preparedForSanityImage, "PREPARED FOR SANITY"));

    setFormData((prev) => ({
      ...prev,
      image: preparedForSanityImage as any,
    }));
    setLoading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (formData && preparedForSanityImage?.url) {
        const status = await createOrGetUser(formData);
        if (status === 200) {
          // Successful registration, redirect or take appropriate action
          console.log("User registered successfully!");
          router.push("/");
          // You can add a redirect or any other action here
        } else {
          // Registration failed, handle error
          console.error("User registration failed");
          // You can show an error message or take other actions here
        }
      }
    } catch (error) {
      console.error("Error fetching or creating user:", error);
    }
  };

  useEffect(() => {
    if (session?.user?.name) {
      const fullName = session.user.name;
      const nameParts = fullName.split(" ");

      let firstName: string;
      let lastName: string;

      if (nameParts.length >= 2) {
        firstName = nameParts[0];
        lastName = nameParts.slice(1).join(" ");
      } else {
        firstName = fullName;
      }

      setFormData({
        firstName: firstName,
        lastName: lastName!,
        email: session.user.email!,
        image: preparedForSanityImage!,
        password: "",
      });
    }
  }, [session]);

  const imageToView = preparedForSanityImage?.url || session?.user?.image;
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="group relative mx-auto flex w-fit items-center justify-center ">
          <div className="mx-auto h-44 w-44 cursor-pointer overflow-hidden rounded-full bg-gray-100">
            {(preparedForSanityImage?.url || session?.user?.image) && (
              <>
                {loading ? (
                  <div className="h-10 w-10 animate-pulse bg-red-500" />
                ) : (
                  <Image
                    height={200}
                    width={200}
                    src={
                      typeof imageToView === "string"
                        ? imageToView
                        : "/profile.png"
                    }
                    alt="Profile Image"
                  />
                )}
              </>
            )}
          </div>

          <button
            className="absolute flex h-full w-full items-center justify-center rounded-full bg-gray-200/5 p-3 group-hover:bg-gray-200/60"
            onClick={() => handleImageClick()}
          >
            <PlusIcon className="w-[60px]" />
          </button>
        </div>

        <input
          ref={imageInputRef}
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
          id="image"
          name="image"
          type="file"
        />

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 space-y-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <Input
          onChange={handleChange}
          value={formData?.firstName}
          label="First Name"
          htmlFor="firtName"
          labelClassName="block text-sm font-medium leading-6 text-gray-900"
          id="firstName"
          name="firstName"
          type="text"
          required
          className="form-input w-full rounded-md py-3 pl-3 outline-none"
        />
        <Input
          onChange={handleChange}
          value={formData?.lastName}
          label="Last Name"
          htmlFor="lastName"
          labelClassName="block text-sm font-medium leading-6 text-gray-900"
          id="lastName"
          name="lastName"
          type="text"
          required
          className="form-input w-full rounded-md py-3 pl-3 outline-none"
        />

        <form className="space-y-6" action="#" method="POST">
          <Input
            onChange={handleChange}
            value={formData?.email}
            label="Email"
            htmlFor="email"
            labelClassName="block text-sm font-medium leading-6 text-gray-900"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            className="form-input w-full rounded-md py-3 pl-3 outline-none"
          />

          <div>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            {/* <Input
              onChange={handleChange}
              value={formData?.password}
              label="Password"
              htmlFor="password"
              labelClassName="block text-sm font-medium leading-6 text-gray-900"
              id="password"
              name="password"
              type="password"
              required={false}
              className="form-input w-full rounded-md py-3 pl-3 outline-none"
            /> */}
          </div>

          <div className="flex">
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex w-full justify-center rounded-s bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <button
              onClick={() => handleSignInWithGoogle("google")}
              className="flex w-full justify-center rounded-e bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Populate with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
