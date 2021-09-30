import styled from "styled-components";

const HeaderBox = styled.header`
  height: 85px;
  width: 100%;
  background-color: #2867B226;
  border-bottom: 5px solid #2867B2;
`;

const Logo = styled.img`
  height: 55px;
  width: 55px;
  position: absolute;
  top: 10px;
  left: 129px
`;


const Header = () => {
  return (
    <>
      <HeaderBox>
        <Logo src='/logo.svg'/>
      </HeaderBox>
    </>
  )
}

export default Header;