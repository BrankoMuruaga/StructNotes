import Menu from "@icons/Menu";
import { dispatchEvent } from "@src/utils/data";
import editor from "@src/yooptaEditor/EditorConfig";

interface MenuButtonProps {
  className?: string;
}

function MenuButton({ className }: MenuButtonProps) {
  const handleClick = () => {
    dispatchEvent("toggleAside");
  };

  return (
    <button
      onClick={handleClick}
      className={
        "size-7 p-1 flex justify-center items-center rounded-2xl cursor-pointer hover:bg-tertiary-light active:bg-quaternary-light  dark:hover:bg-tertiary-dark dark:active:bg-quaternary-dark " +
        className
      }
    >
      <Menu />
    </button>
  );
}

export default MenuButton;
