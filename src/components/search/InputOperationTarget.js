import styled from 'styled-components';

const InputBox = styled.div`
  flex: 2;
  display: flex;
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
`;

const InputStation = styled.input`
  height: 40px;
  width: 60px;
  margin-left: 5px;
  padding: 0;
  border: 1px solid #2867b226;
  border-radius: 10px;
  background-color: #2867b226;
`;

const InputOperationTarget = () => {
  return (
    <InputBox>
      <InputLabel>
        출발
        <InputStation type='text' maxLength='5' />
      </InputLabel>
      <InputLabel>
        도착
        <InputStation type='text' maxLength='5' />
      </InputLabel>
    </InputBox>
  );
};

export default InputOperationTarget;
