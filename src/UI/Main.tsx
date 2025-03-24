import { Editor } from "@src/UI/Editor";
import Aside from "@UI/Aside";

function Main() {
  return (
    <main className="bg-transparent h-full w-4/6 py-10 m-auto flex justify-center items-start">
      <Aside />
      <Editor />
    </main>
  );
}

export default Main;
