import styled from 'styled-components';

import SubmitButton from "./SubmitButton";

const SearchButton = styled(SubmitButton)`
  position: relative;
  left: 200px;
`;

const SearchComponent = () => {
  return (
    <SearchButton>검색</SearchButton>
  );
}

export default SearchComponent;