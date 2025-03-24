import ChevronRight from "@src/icons/ChevronRight";
import type { ComponentProps } from "@src/types";
import { useState } from "react";

function DropdownButton({ children, text }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  return (
    <section className="relative w-full">
      <button
        id="dropdown-button"
        className="w-full flex items-center justify-between text-center hover:bg-tertiary-light dark:hover:bg-tertiary-dark p-1 pl-3 rounded-xl cursor-pointer"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {text}
        <ChevronRight size={20} />
      </button>
      {isOpen && (
        <section
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="absolute left-full bottom-0 h-auto w-max flex flex-col items-center justify-left gap-1 rounded-r-xl text-left text-sm pl-3 p-1 bg-secondary-light dark:bg-secondary-dark "
        >
          {children}
        </section>
      )}
    </section>
  );
}

export default DropdownButton;
