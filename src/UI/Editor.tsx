import YooptaEditor, { Blocks, type YooptaContentValue } from "@yoopta/editor";
import editor, { MARKS, PLUGINS, TOOLS } from "@yooptaEditor/EditorConfig";
import { useEffect, useState } from "react";

export const Editor = () => {
  const [value, setValue] = useState<YooptaContentValue>();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleChange = (value: YooptaContentValue) => {
    setValue(value);
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
