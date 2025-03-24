import Trash from "@src/icons/Trash";
import { deleteDocument } from "@src/services/documentCRUD";

export const AsideDocumentsOptions = [
  {
    name: "Delete",
    Icon: Trash,
    action: (id: string | number) => deleteDocument(id),
  },
];

export function dispatchEvent(name: string) {
  const event = new CustomEvent(name);
  window.dispatchEvent(event);
}
