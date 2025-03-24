import { DEFAULT_TITLE } from "@src/constants";
import Plus from "@src/icons/Plus";
import { dispatchEvent } from "@src/utils/data";
import editor from "@src/yooptaEditor/EditorConfig";

function NewDocumentButton() {
  const handleClick = () => {
    editor.setEditorValue({});
    (editor as any).documentID = null;
    (editor as any).title = DEFAULT_TITLE;
    dispatchEvent("crudEvent");
  };
  return (
    <button
      className="flex gap-2 justify-around items-center px-3 py-2 rounded-4xl mr-auto mb-3 font-bold bg-secondary-light hover:bg-tertiary-light active:bg-quaternary-light dark:bg-tertiary-dark dark:hover:bg-quaternary-dark dark:active:bg-primary-dark cursor-pointer"
      onClick={handleClick}
    >
      <Plus size={24} />
      <span className="w-3/4">New</span>
    </button>
  );
}

export default NewDocumentButton;
