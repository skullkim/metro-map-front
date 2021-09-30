import styled from "styled-components";

import SelectOperationTarget from "./SelectOperationTarget";

const OptionsBox = styled.section`
  height: 46px;
  width: 69%;
  margin: 26px 0;
  position: relative;
  left: 198px;
`;

const SearchPathOptions = () => {
  return (
    <OptionsBox>
      <SelectOperationTarget />
    </OptionsBox>
  );
}

export default SearchPathOptions;