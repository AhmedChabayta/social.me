import { defineType, defineField } from "sanity";

export const postEvent = defineType({
  name: "postEvent",
  title: "Post Event",
  type: "document",
  fields: [
    defineField({
      name: "userId",
      title: "User ID",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: ["like", "dislike"],
      },
    }),
    defineField({
      name: "postId",
      title: "Post ID",
      type: "reference",
      to: [{ type: "post" }],
    }),
  ],
});
