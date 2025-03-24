import { DEFAULT_TITLE } from "@src/constants";
import type { ComponentProps } from "@src/types";
import editor from "@src/yooptaEditor/EditorConfig";
import React, { useEffect, useState } from "react";

function InputName({ className }: ComponentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState((editor as any).title);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleRefresh = () => {
      setRefreshKey((prev) => prev + 1);
      setName((editor as any).title);
    };
    window.addEventListener("crudEvent", handleRefresh);

    return () => {
      window.removeEventListener("crudEvent", handleRefresh);
    };
  }, []);

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleClick: React.MouseEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setIsEditing(true);
    requestAnimationFrame(() => {
      const inputElement = document.getElementById(
        "nombre"
      ) as HTMLInputElement;
      inputElement.focus();
      if ((target as HTMLElement).tagName.toLowerCase() === "p") {
        inputElement.setSelectionRange(0, inputElement.value.length);
      }
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    (editor as any).title = newName;
  };

  return (
    <span className={`flex justify-center items-center ${className}`}>
      {isEditing ? (
        <input
          maxLength={32}
          type="text"
          name="nombre"
          id="nombre"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          autoComplete="off"
          className="text-lg text-center rounded-lg border-2 focus:outline-0 border-none focus:bg-secondary-light focus:dark:bg-secondary-dark"
        />
      ) : (
        <p key={refreshKey} onClick={handleClick} className="text-lg">
          {name ? name : DEFAULT_TITLE}
        </p>
      )}
    </span>
  );
}

export default InputName;
