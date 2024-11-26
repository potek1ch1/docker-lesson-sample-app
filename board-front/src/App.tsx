import "./App.css";
import BoardList from "./components/board-list";
import TextForm from "./components/text-form";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-zinc-200 min-h-screen flex flex-col">
        <header className=" border-slate-600 mb-2 py-2 bg-slate-50">
          <h1 className="font-bold text-3xl text-center ">掲示板</h1>
        </header>
        <main className="flex-grow">
          <TextForm />
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
    </BrowserRouter>
  );
}

export default App;
