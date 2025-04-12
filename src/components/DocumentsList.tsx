import type { Document } from "@src/types";
import { useEffect, useState } from "react";
import DocumentButton from "./DocumentButton";
import { getAllDocuments } from "@src/db/localStorage";

function DocumentsList() {
  const [documents, setDocuments] = useState<Document[]>([]);
  useEffect(() => {
    const fetchDocuments = async () => {
      const result = getAllDocuments();
      if (result.success && result.documents) {
        setDocuments(result.documents);
      } else {
        console.error("Failed to fetch documents:", result.error);
      }
    };
    fetchDocuments();
  }, []);
  return (
    <section className="h-full overflow-scroll overflow-x-hidden">
      <h2 className="mb-3 font-semibold">Documents</h2>
      <div className="flex flex-col gap-3 pl-1 ">
        {documents.map((document: Document) => (
          <DocumentButton key={document.id} {...document} />
        ))}
      </div>
    </section>
  );
}

export default DocumentsList;
