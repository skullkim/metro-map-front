import styled from "styled-components";

import InputOperationTarget from "./InputOperationTarget";
import ResetButton from "./ResetButton";
import SearchComponent from "./SearchComponent";
import SelectOperationTarget from "./SelectOperationTarget";

const OptionsBox = styled.section`
  height: 46px;
  width: 69%;
  margin: 26px 0;
  position: relative;
  left: 198px;
  display: flex;
  align-items: center;
`;

const SearchPathOptions = () => {
  return (
    <OptionsBox>
      <SelectOperationTarget />
      <InputOperationTarget />
      <SearchComponent />
      <ResetButton />
    </OptionsBox>
  );
}

export default SearchPathOptions;