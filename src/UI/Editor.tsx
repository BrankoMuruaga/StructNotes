import YooptaEditor, { Blocks, type YooptaContentValue } from "@yoopta/editor";
import editor, { MARKS, PLUGINS, TOOLS } from "@yooptaEditor/EditorConfig";
// Removed unused import
import { useEffect, useState } from "react";

export const Editor = () => {
  const [value, setValue] = useState<YooptaContentValue>();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleChange = (value: YooptaContentValue) => {
    setValue(value);

    const blocks = Object.keys(editor.children || {});

    if (blocks.length > 0) {
      const lastBlockId = blocks[blocks.length - 2];
      const lastElement = document.querySelector(
        `[data-yoopta-block-id="${lastBlockId}"]`
      ) as HTMLElement | null;

      if (lastElement) {
        lastElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const blockData = Blocks.buildBlockData();
    const insertBlockOptions = { blockData, at: 1, focus: true };
    const insertedId = editor.insertBlock("Paragraph", insertBlockOptions);
    if (insertedId) {
      editor.focusBlock(insertedId);
    }

    const handleRefreshAside = () => {
      setRefreshKey((prev) => prev + 1);
    };

    window.addEventListener("crudEvent", handleRefreshAside);

    return () => {
      window.removeEventListener("crudEvent", handleRefreshAside);
    };
  }, []);

  return (
    <YooptaEditor
      key={refreshKey}
      editor={editor}
      plugins={PLUGINS}
      placeholder="Type '/' for commands"
      value={value}
      onChange={handleChange}
      tools={TOOLS}
      marks={MARKS}
      autoFocus
    />
  );
};
