import PropTypes from 'prop-types';
import styled from "styled-components";

import Portal from "./Portal";

const ModalBox = styled.section`
  height: 460px;
  width: 551px;
  position: absolute;
  top: 25%;
  left: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  background-color: white;
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

const CommonModalBox = ({children}) => {
  return (
    <Portal>
      <ModalOverlay>
        <ModalBox>
          {children}
        </ModalBox>
      </ModalOverlay>
    </Portal>
  );
}

CommonModalBox.propTypes = {
  children: PropTypes.element.isRequired,
}

export {ModalTitle, CommonModalBox};
