import GitButton from "@src/components/GitButton";
import { Editor } from "@src/UI/Editor";
import Aside from "@UI/Aside";

function Main() {
  return (
    <main className="bg-transparent h-full w-4/6 py-10 m-auto flex justify-center items-start">
      <Aside />
      <Editor />
      <GitButton />
    </main>
  );
}

export default Main;
