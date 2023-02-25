import React from "react"; 
import { useContextSelector } from "use-context-selector";
import { Modal } from "antd";
import { ModalWrapper } from "./ContactModal.style";
import { ModalContext } from "../../../Context/ModalContext/Context";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
 
function MyModal({ children }) {
  const [isModalVisible, setIsModalVisible] = useContextSelector(
    ModalContext,
    (state) => state,
  );
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalWrapper>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} >
        {children}
      </Modal>
    </ModalWrapper>
  );
}

export default MyModal;
