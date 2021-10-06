import styled from "styled-components";

const ModalBox = styled.section`
  height: 460px;
  width: 551px;
  position: absolute;
  top: 25%;
  left: 35%;
  background-color: red;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalTitle = styled.b`
  font-size: 30px;
`;

export {ModalBox, ModalTitle, ModalOverlay};
