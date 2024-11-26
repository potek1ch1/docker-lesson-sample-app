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
    allowHeaders: [
      'Content-Type', 'Authorization'
    ],
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

app.post("/posts", async (c) => {
  const body = await c.req.json();
  const { content, createdById } = body;
  console.log(content, createdById);
  if (!content || !createdById) {
    c.status(400);
    return c.json({ error: "content or createdById is required" });
  }
  const post = await prisma.post.create({
    data: {
      content,
      createdById,
    },
  });

  return c.json(post);
});

export default {
  port: 8080,
  fetch: app.fetch,
};
