import Trash from "@src/icons/Trash";
import { deleteDocument } from "@src/db/localStorage";
import type { DocumentOptions } from "@src/types";

export const AsideDocumentsOptions: DocumentOptions[] = [
  {
    name: "Delete",
    Icon: Trash,
    action: (id: string) => deleteDocument(id),
  },
];

export function dispatchEvent(name: string) {
  const event = new CustomEvent(name);
  window.dispatchEvent(event);
}
