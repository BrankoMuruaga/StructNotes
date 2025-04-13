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

export function dispatchEvent(name: string, data?: any) {
  if (data) {
    const event = new CustomEvent(name, { detail: data });
    window.dispatchEvent(event);
    return;
  }
  // If no data is passed, just dispatch the event with the name
  const event = new CustomEvent(name);
  window.dispatchEvent(event);
}
