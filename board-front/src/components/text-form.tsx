import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const updatePost = async (content: string) => {
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, createdById: '1' }),
  });
  return response.json();
};

const TextForm = () => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const [text, setText] = useState("");
  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const handleSubmit = () => {
    mutation.mutate(text, { onSuccess: () => navigate(0) });
  };
  return (
    <div>
      <div className="flex flex-col w-96 mx-auto my-3 gap-2">
        <Textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="何かいいことあった？"
          className="bg-slate-50 resize-none"
        />
        <Button
          className="font-bold bg-blue-400 hover:bg-blue-400 hover:opacity-90"
          onClick={handleSubmit}
        >
          メッセージを投稿
        </Button>
      </div>
    </div>
  );
};

export default TextForm;
