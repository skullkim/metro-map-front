import styled from "styled-components";

import InputOperationTarget from "./InputOperationTarget";
import SelectOperationTarget from "./SelectOperationTarget";

const OptionsBox = styled.section`
  height: 46px;
  width: 69%;
  margin: 26px 0;
  position: relative;
  left: 198px;
  display: flex;
`;

const SearchPathOptions = () => {
  return (
    <OptionsBox>
      <SelectOperationTarget />
      <InputOperationTarget />
    </OptionsBox>
  );
}

export default SearchPathOptions;