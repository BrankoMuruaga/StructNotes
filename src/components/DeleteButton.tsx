import { deleteDocument } from "@src/db/localStorage";
import Trash from "@src/icons/Trash";
import { dispatchEvent } from "@src/utils/data";

function DeleteButton({ id }: { id: string }) {
  const handlerClick = () => {
    const modalDetail = {
      title: "Eliminar documento",
      message: "¿Estás seguro de que deseas eliminar este documento?",
      confirmText: "Eliminar",
      cancelText: "Cancelar",
      confirmColor: "#fb2c36",
      cancelColor: "#37393b",
      onConfirm: () => {
        deleteDocument(id);
        window.dispatchEvent(new Event("confirmationModalClose"));
      },
      onCancel: () => window.dispatchEvent(new Event("confirmationModalClose")),
    };

    // Dispatch the event to open the modal
    // This event will be listened in the ConfirmationModal component
    dispatchEvent("confirmationModal", modalDetail);
  };
  return (
    <button
      onClick={handlerClick}
      className="flex gap-1 justify-center items-center py-1 hover:bg-tertiary-light dark:hover:bg-tertiary-dark rounded-full cursor-pointer"
    >
      <Trash size={10} />
    </button>
  );
}

export default DeleteButton;
