import Dots from "@src/icons/Dots";
import type { DocumentOptions } from "@src/types";
import { useState } from "react";

function OptionsButton({
  id,
  options,
}: {
  id: string;
  options: DocumentOptions[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => setIsOpen((prev) => !prev);
  return (
    <section className="relative">
      <button
        onClick={handlerClick}
        className="flex px-2 py-1 items-center justify-center hover:bg-tertiary-light dark:hover:bg-tertiary-dark active:bg-secondary-light dark:active:bg-secondary-dark p-1 rounded-lg cursor-pointer"
      >
        <Dots size={12} />
      </button>
      {isOpen && (
        <section className="absolute left-10 top-0 h-auto w-max flex flex-col items-center justify-left gap-1 rounded-r-xl text-left text-sm pl-3 p-1 bg-secondary-light dark:bg-secondary-dark">
          {options.map(({ name, Icon, action }) => (
            <button
              key={name}
              onClick={() => action(id)}
              className="flex gap-1 justify-center items-center w-full text-left hover:bg-quaternary-light dark:hover:bg-quaternary-dark py-1 px-2 rounded-xl cursor-pointer"
            >
              {Icon && <Icon size={12} />}
              {name}
            </button>
          ))}
        </section>
      )}
    </section>
  );
}

export default OptionsButton;
