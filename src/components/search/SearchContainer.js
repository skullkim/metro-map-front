import styled from 'styled-components';

import InputOperationTarget from './InputOperationTarget';
import SelectOperationTarget from './SelectOperationTarget';
import SubmitButton from './SubmitButton';

const OptionsBox = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  position: sticky;
`;

const SearchContainer = () => {
  return (
    <OptionsBox>
      <SelectOperationTarget />
      <InputOperationTarget />
      <SubmitButton />
    </OptionsBox>
  );
};

export default SearchContainer;
