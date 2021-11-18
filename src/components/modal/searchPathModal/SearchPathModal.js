import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { CommonModalBox } from '../CommonModal';

const SearchPathBox = styled.div`
  width: 165.6px;
  height: 61.1px;
  background-color: red;
  position: absolute;
  ${({xPosition, yPosition}) => css`
    left: ${`${xPosition + 110}px`};
    top: ${`${yPosition + 120}px`};
  `}
`;

const SearchPathModal = ({xPosition, yPosition}) => {

  return (
    <CommonModalBox>
      <SearchPathBox xPosition={xPosition} yPosition={yPosition} />
    </CommonModalBox>
  );
}

SearchPathModal.propTypes = {
  xPosition: PropTypes.string.isRequired,
  yPosition: PropTypes.string.isRequired,
}

export default SearchPathBox;