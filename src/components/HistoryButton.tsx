import Redo from "@icons/Redo";
import Undo from "@icons/Undo";
import type { ComponentProps } from "../types";

function HistoryButton({ undo = false, redo = false }: ComponentProps) {
  const simulateKeyPress = (key: string) => {
    const event = new KeyboardEvent("keydown", {
      key,
      ctrlKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  return (
    <button
      type="button"
      onClick={() => {
        simulateKeyPress(undo ? "z" : "y");
      }}
      className={`bg-tertiary-light
        dark:bg-tertiary-dark 
        ${undo && "rounded-s-2xl"}
        ${redo && "rounded-e-2xl"} 
        px-2 py-0.5 
        text-xs 
        cursor-pointer 
        active:opacity-25 
        hover:bg-quaternary-light 
        dark:hover:bg-quaternary-dark 
        dark:active:opacity-50`}
    >
      {undo && <Undo size={18} />}
      {redo && <Redo size={18} />}
    </button>
  );
}

export default HistoryButton;
