import { Hono } from "hono";
import { prisma } from "./client";
import { cors } from "hono/cors";

const app = new Hono();

type Post = {
  id: string;
  content: string;
  createdById: string;
  createdBy: string;
};

//クロスリジンを許可
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET"],
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/posts", async (c) => {
  const postData = await prisma.post.findMany({
    include: {
      createdBy: {
        select: {
          username: true,
          id: true,
        },
      },
    },
  });
  const posts: Post[] = postData.map((post) => {
    return {
      id: post.id,
      content: post.content,
      createdById: post.createdById,
      createdBy: post.createdBy.username,
    };
  });

  return c.json(posts);
});

export default {
  port: 8080,
  fetch: app.fetch,
};
