/**
 * custom hook to manage the state of a modal.
 *
 * @returns {Object} an object:
 *
 */

import { useState } from "react";

const useModal = () => {
  const [isOpenModal, setModalOpen] = useState<boolean>(false);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return { isOpenModal, onOpenModal, onCloseModal };
};

export default useModal;
