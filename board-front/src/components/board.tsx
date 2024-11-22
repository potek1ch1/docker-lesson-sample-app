import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaShareFromSquare } from "react-icons/fa6";
type Post = {
  id: number;
  userName: string;
  content: string;
};

const Board = ({ id, userName, content }: Post) => {
  const deletePost = (id: number) => {
    console.log(id);
  };
  return (
    <div className="border w-96 pl-5 mx-auto bg-slate-50 rounded py-2 px-3">
      <div className="text-left">
        <span>{userName}</span>
        <span>2024/12/7 12:59</span>
      </div>

      <p className="whitespace-pre-line text-left">{content}</p>
      <div className="flex gap-5 justify-end">
        <button className="">
          {/* <FaRegHeart /> */}
          <FaHeart size={20} />
        </button>
        <button>
          <FaShareFromSquare size={20} />
        </button>
        <button
          onClick={() => deletePost(id)}
          className="text-red-400"
        >
          <MdDelete size={25}/>
        </button>
      </div>
    </div>
  );
};

export default Board;
