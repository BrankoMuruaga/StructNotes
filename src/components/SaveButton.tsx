import Check from "@src/icons/Check";
import Save from "@src/icons/Save";
import X from "@src/icons/X";
import { createDocument, updateDocument } from "@src/db/localStorage";
import type { ComponentProps } from "@src/types";
import { dispatchEvent } from "@src/utils/data";
import editor from "@yooptaEditor/EditorConfig";
import { useState, useEffect } from "react";

function SaveButton({ className }: ComponentProps) {
  const [saving, setSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSaved || isError) {
      const timer = setTimeout(() => {
        setSaving(false);
        setIsSaved(false);
        setIsError(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSaved, isError]);

  const handleClick = async () => {
    setSaving(true);
    setIsError(false);
    setIsSaved(false);

    try {
      const editorContent = editor.getEditorValue();
      const title = (editor as any).title;

      if ((editor as any).documentID) {
        updateDocument((editor as any).documentID, title, editorContent);
        setSaving(false);
        setIsSaved(true);

        dispatchEvent("documentUpdated");
        return;
      }

      const result = createDocument(title, editorContent);
      console.log(result);

      if (result.success) {
        setSaving(false);
        setIsSaved(true);
        dispatchEvent("documentUpdated");
      } else {
        setSaving(false);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error saving document:", error);
      setSaving(false);
      setIsError(true);
    }
  };

  const renderIcon = () => {
    if (saving) return <Save size={20} />;
    if (isSaved) return <Check size={20} stroke="#62e469" />;
    if (isError) return <X size={20} stroke="#e46962" />;
    return <Save size={20} />;
  };

  return (
    <button
      className={
        "size-7 p-1 flex justify-center items-center rounded-2xl cursor-pointer hover:bg-tertiary-light active:bg-primary-light  dark:hover:bg-tertiary-dark dark:active:bg-primary-dark" +
        className
      }
      onClick={handleClick}
    >
      {renderIcon()}
    </button>
  );
}

export default SaveButton;
