import styled from "styled-components";

import HeaderNav from "./HeaderNav";

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
  top: 15px;
  left: 129px
`;


const Header = () => {
  return (
    <>
      <HeaderBox>
        <Logo src='/logo.svg'/>
        <HeaderNav />
      </HeaderBox>
    </>
  )
}

export default Header;