import styled, { css } from "styled-components";

const ResultDataBox = styled.section`
  width: 463px;
  height: 56px;
  //background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  ${({first}) => first && css`
    margin-right: 20px;
  `};
`;

const DataTitle = styled.b`
  font-size: 18px;
`;

const Data = styled(DataTitle)``;

const SearchResultData = () => {
  return (
    <ResultDataBox>
      <DataBox first>
        <DataTitle>출발역 / 도착역</DataTitle>
        <Data>120 -&gt; 806</Data>
      </DataBox>
      <DataBox>
        <DataTitle>요금 정보</DataTitle>
        <Data>3333원</Data>
      </DataBox>
      <DataBox>
        <DataTitle>거리 정보</DataTitle>
        <Data>3.3km</Data>
      </DataBox>
      <DataBox>
        <DataTitle>소요 시간</DataTitle>
        <Data>3시간 34분</Data>
      </DataBox>
    </ResultDataBox>
  );
}

export default SearchResultData;