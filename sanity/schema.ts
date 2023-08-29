import { type SchemaTypeDefinition } from "sanity";
import { user } from "./user";
import { post } from "./post";
import { postedBy } from "./postedBy";
import { comment } from "./comment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, post, postedBy, comment],
};
