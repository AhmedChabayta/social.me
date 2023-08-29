import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skDqNw7ikpdoMJYvB8Y98dqViR9iQRBVibp1ZqfkHMcK5JyjEd5t0Sfe0iRa3oUZcSqMosM9FDdX8bKnGnByyUhacQvrggbWd4mlAClo1ispFQN7oIQyMnJBLxT4XieArGKjneGcGCtOMe8MHUs681Y0p66QV7OD4vnhg6KgdkU3szKYX5C4",
});
