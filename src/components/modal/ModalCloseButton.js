import styled from "styled-components";

const CloseModal = styled.button`
  height: 44px;
  width: 189px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #2867B2;
  border: 1px solid #2867B2;
  border-radius: 15px;
  cursor: grab;
`;

const ModalCloseButton = () => {
  return (<CloseModal>홈으로 돌아가기</CloseModal>);
}

export default ModalCloseButton;
