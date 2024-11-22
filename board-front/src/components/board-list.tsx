
import Board from "./board";

const POSTS = [
  { id: 1, userName: "ポテきち", content: "おはよう\nヤッホー" },
  { id: 2, userName: "ポテごん", content: "こんにちは" },
  { id: 3, userName: "ぽてぽて", content: "こんばんは" },
];

const BoardList = () => {
  return (
    <div>
      <h2 className="font-bold text-xl text-center mb-2">みんなの投稿</h2>
      <div className="flex flex-col gap-3">
        {POSTS.map((post) => (
          <Board
            key={post.id}
            id={post.id}
            userName={post.userName}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
