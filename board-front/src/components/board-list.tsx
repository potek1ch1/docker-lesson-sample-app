import { useQuery } from "@tanstack/react-query";
import Board from "./board";

type Post = {
  id: string;
  content: string;
  createdById: string;
  createdBy: string;
};
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const getPosts = async () => {
  const posts: Post[] = await fetch(`${SERVER_URL}/posts`).then((res) =>
    res.json()
  );
  console.log(posts);
  return posts;
};

const BoardList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return (
    <div>
      <h2 className="font-bold text-xl text-center mb-2">みんなの投稿</h2>
      {isLoading && <p className="text-center">Loading...</p>}
      {data && (
        <div className="flex flex-col gap-3">
          {data.map((post: Post) => (
            <Board post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardList;
