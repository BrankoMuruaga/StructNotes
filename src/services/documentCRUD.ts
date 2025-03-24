import { dispatchEvent } from "@src/utils/data";
import type { YooptaContentValue } from "@yoopta/editor";

const createDocument = async (title: string, content: YooptaContentValue) => {
  try {
    const response = await fetch("/api/document", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: title,
        contenido: content,
      }),
    });

    if (response.ok) {
      dispatchEvent("crudEvent");
      return { success: true };
    } else {
      const res = await response.json();
      console.error("Error al guardar el documento:", res.error);
      return { success: false, error: res.error };
    }
  } catch (error) {
    console.error("Error al guardar el documento:", error);
    return { success: false, error };
  }
};

const getDocument = async (id: string | number) => {
  const url = `/api/document${id ? `?id=${id}` : ""}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const document = await response.json();
      return { success: true, document };
    } else {
      const res = await response.json();
      console.error("Error al leer el documento:", res.error);
      return { success: false, error: res.error };
    }
  } catch (error) {
    console.error("Error al leer el documento:", error);
    return { success: false, error };
  }
};

const updateDocument = async (
  id: string | number,
  title: string,
  content: YooptaContentValue
) => {
  const url = `/api/document${id ? `?id=${id}` : ""}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: title,
        contenido: content,
      }),
    });

    if (response.ok) {
      dispatchEvent("crudEvent");
      return { success: true };
    } else {
      const res = await response.json();
      console.error("Error al actualizar el documento:", res.error);
      return { success: false, error: res.error };
    }
  } catch (error) {
    console.error("Error al actualizar el documento:", error);
    return { success: false, error };
  }
};

const deleteDocument = async (id: string | number) => {
  const url = `/api/document${id ? `?id=${id}` : ""}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      dispatchEvent("crudEvent");
      return { success: true };
    } else {
      const res = await response.json();
      console.error("Error al eliminar el documento:", res.error);
      return { success: false, error: res.error };
    }
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
    return { success: false, error };
  }
};

export { createDocument, getDocument, updateDocument, deleteDocument };
