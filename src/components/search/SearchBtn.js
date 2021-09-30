import styled from 'styled-components';

const SearchBtnBox = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 25px;
  width: 62px;
  border: 1px solid #2867b2;
  border-radius: 10px;
  padding: 0;
  margin-right: 25px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: #2867b2;
  cursor: pointer;
`;

const SearchBtn = () => {
  return (
    <SearchBtnBox>
      <Button>검색</Button>
      <Button>리셋</Button>
    </SearchBtnBox>
  );
};

export default SearchBtn;
