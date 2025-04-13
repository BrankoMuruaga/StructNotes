import type { DetailsConfirmationModal } from "@src/types";
import { useEffect, useState } from "react";

function ConfirmationModal() {
  const [modalDetail, setModalDetail] = useState<DetailsConfirmationModal>();
  const [isOpen, setIsOpen] = useState(false);

  const {
    title,
    message,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    confirmColor,
    cancelColor,
  } = modalDetail || {};

  useEffect(() => {
    const handleConfirmationModal = (e: Event) => {
      console.log("handleConfirmationModal", (e as CustomEvent).detail);

      setModalDetail((e as CustomEvent).detail);
      setIsOpen(true);
    };

    const handleConfirmationModalClose = () => {
      setModalDetail(undefined);
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const cancelButton = document.getElementById("cancel-button");
        cancelButton?.click();
      }
      if (event.key === "Enter") {
        const confirmButton = document.getElementById("confirm-button");
        confirmButton?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("confirmationModal", handleConfirmationModal);
    window.addEventListener(
      "confirmationModalClose",
      handleConfirmationModalClose
    );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("confirmationModal", handleConfirmationModal);
      window.removeEventListener(
        "confirmationModalClose",
        handleConfirmationModalClose
      );
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-[999]">
      <div className="bg-secondary-light dark:bg-secondary-dark rounded-xl p-5 flex flex-col gap-3 w-[500px]">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{message}</p>
        <div className="flex gap-2 items-center justify-end">
          <button
            id="confirm-button"
            style={{
              backgroundColor: confirmColor || "#4caf50",
              color: "white",
            }}
            className="hover:opacity-90 active:opacity-60 px-4 py-2 rounded-lg cursor-pointer"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
          <button
            id="cancel-button"
            className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:active:bg-gray-900"
            onClick={onCancel}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmationModal;
