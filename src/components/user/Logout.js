import styled from 'styled-components';

const LogoutBtn = styled.button`
  margin-top: 0;
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
  word-break: keep-all;
  padding: 0;
  border: 0;
`;

const Logout = () => {
  return (
    <LogoutBtn>로그아웃</LogoutBtn>
  )
}

export default Logout;