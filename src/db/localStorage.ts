import { dispatchEvent } from "@src/utils/data";
import type { YooptaContentValue } from "@yoopta/editor";
import { DEFAULT_ID } from "@src/constants";

const createDocument = (title: string, content: YooptaContentValue) => {
  try {
    const id = `${DEFAULT_ID}_${title}_${crypto.randomUUID()}`;
    const data = { titulo: title, contenido: content };
    localStorage.setItem(id, JSON.stringify(data));
    dispatchEvent("crudEvent");
    return { success: true, id };
  } catch (error) {
    console.error("Error al guardar el documento:", error);
    return { success: false, error };
  }
};

const getDocument = (id: string) => {
  try {
    const document = localStorage.getItem(id);
    if (document) {
      return { success: true, document: JSON.parse(document) };
    } else {
      console.error("Documento no encontrado");
      return { success: false, error: "Documento no encontrado" };
    }
  } catch (error) {
    console.error("Error al leer el documento:", error);
    return { success: false, error };
  }
};

const getAllDocuments = () => {
  try {
    const documents = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("notion_doc_")) {
        const document = localStorage.getItem(key);
        if (document) {
          documents.push({ id: key, ...JSON.parse(document) });
        }
      }
    }
    return { success: true, documents };
  } catch (error) {
    console.error("Error al obtener todos los documentos:", error);
    return { success: false, error };
  }
};

const updateDocument = (
  id: string,
  title: string,
  content: YooptaContentValue
) => {
  try {
    if (!localStorage.getItem(id)) {
      console.error("Documento no encontrado");
      return { success: false, error: "Documento no encontrado" };
    }
    const data = { titulo: title, contenido: content };
    localStorage.setItem(id, JSON.stringify(data));
    dispatchEvent("crudEvent");
    return { success: true };
  } catch (error) {
    console.error("Error al actualizar el documento:", error);
    return { success: false, error };
  }
};

const deleteDocument = (id: string) => {
  try {
    if (!localStorage.getItem(id)) {
      console.error("Documento no encontrado");
      return { success: false, error: "Documento no encontrado" };
    }
    localStorage.removeItem(id);
    dispatchEvent("crudEvent");
    return { success: true };
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
    return { success: false, error };
  }
};

export {
  createDocument,
  deleteDocument,
  getAllDocuments,
  getDocument,
  updateDocument,
};
