import Document from "@models/document.model";

// Obtener todos los documentos
export const getAllDocuments = async () => {
  const documents = await Document.findAll();
  return documents;
};

// Obtener un document por ID
export const getDocument = async (id: string) => {
  const document = await Document.findByPk(id);
  return document;
};

// Guardar un nuevo document
export const saveDocument = async (document: any) => {
  document = JSON.parse(document);

  await Document.create(document);
};

// Actualizar un document
export const updateDocument = async (
  id: string,
  document: { [x: string]: any }
) => {
  await Document.update(document, { where: { id } });
};

// Eliminar un document
export const deleteDocument = async (id: string) => {
  await Document.destroy({ where: { id } });
};
