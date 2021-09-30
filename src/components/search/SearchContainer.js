import styled from 'styled-components';

import InputOperationTarget from './InputOperationTarget';
import SearchBtn from './SearchBtn';
import SelectOperationTarget from './SelectOperationTarget';

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
      <SearchBtn />
    </OptionsBox>
  );
};

export default SearchContainer;
