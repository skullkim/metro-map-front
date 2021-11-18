import PropTypes from 'prop-types';
// import {MdChatBubbleOutline} from 'react-icons/md';
import styled, { css } from 'styled-components';

import Portal from '../Portal';

const SearchPathBox = styled.div`
  width: 165.6px;
  height: 61.1px;
  border: 3px solid #2867B2;
  position: absolute;
  ${({xPosition, yPosition}) => css`
    left: ${`${xPosition}px`};
    top: ${`${yPosition}px`};
  `}
  
  &:before {
    border-bottom:0 solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #2867B2;
    content:"";
    position:absolute;
    top: 62px;
    left: 75px;
  }
`;

const SearchPathModal = ({xPosition, yPosition}) => {
  return (
    <Portal>
      <SearchPathBox xPosition={xPosition - 75} yPosition={yPosition - 70} />
    </Portal>
  );
}

SearchPathModal.propTypes = {
  xPosition: PropTypes.number.isRequired,
  yPosition: PropTypes.number.isRequired,
}

export default SearchPathModal;