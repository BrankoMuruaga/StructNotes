import type { Document } from "@src/types";
import { useEffect, useState } from "react";
import DocumentButton from "./DocumentButton";

function DocumentsList() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const fetchDocuments = async () => {
      setDocuments(
        await fetch("/api/document").then((response) => response.json())
      );
    };
    fetchDocuments();
  }, []);
  return (
    <section>
      <h2 className="mb-3 font-semibold">Documents</h2>
      <div className="flex flex-col gap-3 pl-1">
        {documents.map((document: Document) => (
          <DocumentButton key={document.id} {...document} />
        ))}
      </div>
    </section>
  );
}

export default DocumentsList;
