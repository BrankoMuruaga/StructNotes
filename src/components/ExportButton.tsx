import type { ComponentProps } from "@src/types";
import editor from "@yooptaEditor/EditorConfig";

function ExportButton({
  className,
  markdown = false,
  html = false,
}: ComponentProps) {
  const handleClick = () => {
    const editorValue = editor.getEditorValue();
    let fileContent = "";
    let fileType = "";
    let fileExtension = "";

    if (html) {
      fileContent = editor.getHTML(editorValue);
      fileType = "text/html";
      fileExtension = "html";
    } else if (markdown) {
      fileContent = editor.getMarkdown(editorValue);
      fileType = "text/markdown";
      fileExtension = "md";
    }

    const blob = new Blob([fileContent], { type: fileType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(editor as any).title}.${fileExtension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full
        px-4 py-0.5
        cursor-pointer 
        text-left
        active:opacity-25 
        hover:rounded-r-xl
        hover:bg-quaternary-light 
        dark:hover:bg-quaternary-dark 
        dark:active:opacity-50 ${className}`}
    >
      Export as {html && "HTML"} {markdown && "Markdown"}
    </button>
  );
}

export default ExportButton;
