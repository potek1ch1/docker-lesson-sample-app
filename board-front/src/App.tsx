import "./App.css";
import BoardList from "./components/board-list";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="bg-zinc-200 min-h-screen flex flex-col">
      <header className=" border-slate-600 mb-2 py-2 bg-slate-50">
        <h1 className="font-bold text-3xl text-center ">掲示板</h1>
      </header>
      <main className="flex-grow">
        <div className="flex flex-col w-96 mx-auto my-3 gap-2">
          <Textarea
            placeholder="何かいいことあった？"
            className="bg-slate-50 resize-none"
          />
          <Button className="font-bold bg-blue-400 hover:bg-blue-400 hover:opacity-90">
            メッセージを投稿
          </Button>
        </div>
        <BoardList />
      </main>
      <footer className="border-slate-600 pb-2 bg-slate-50">
        <div className="text-center">Docker勉強会</div>
        <div>
          <p className="text-right">制作: potekichi</p>
          <div className="flex justify-end">
            <a href="https://x.com/potepot3">
              <FaSquareXTwitter size={30} />
            </a>
            <a href="https://github.com/potek1ch1">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
