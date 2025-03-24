import type { Document } from "@src/types";
import { AsideDocumentsOptions, dispatchEvent } from "@src/utils/data";
import OptionsButton from "./OptionsButton";
import editor from "@src/yooptaEditor/EditorConfig";

function DocumentButton({ id, titulo, contenido }: Document) {
  const handlerClick = () => {
    editor.setEditorValue(contenido);
    (editor as any).documentID = id;
    (editor as any).title = titulo;
    dispatchEvent("crudEvent");
  };
  return (
    <span className="flex items-center justify-between">
      <button
        className="text-xs cursor-pointer
      p-2 py-0.5
      w-5/6
      text-left
      active:opacity-25 
      hover:rounded-xl
      hover:bg-quaternary-light 
      dark:hover:bg-quaternary-dark 
      dark:active:opacity-50"
        onClick={handlerClick}
        key={id}
      >
        <p className="overflow-clip text-ellipsis whitespace-nowrap">
          {titulo}
        </p>
      </button>
      <OptionsButton id={id} options={AsideDocumentsOptions} />
    </span>
  );
}

export default DocumentButton;
