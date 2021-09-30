import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 85px;
  background-color: #2867b226;
  border-bottom: 5px solid #2867b2;
`;

const Logo = styled.img`
  height: 55px;
  width: 55px;
  position: absolute;
  top: 15px;
  left: 129px;
`;

const NavBar = styled.nav`
  height: 18px;
  width: 490px;
  position: absolute;
  top: 34px;
  right: 76px;
  display: flex;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  margin-top: 0;
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
  word-break: keep-all;
`;

const VerticalLine = styled.div`
  width: 3.75px;
  height: 40px;
  background-color: black;
  margin-right: 22px;
  margin-left: 2px;
`;

const HeaderNav = () => {
  return (
    <Header>
      <Logo src='/logo.svg' />
      <NavBar>
        <NavItem to='/'>길찾기</NavItem>
        <NavItem to='/lost-and-found'>유실물센터</NavItem>
        <NavItem to='/book-mark'>즐겨찾기</NavItem>
        <VerticalLine />
        <NavItem to='/sign-up'>회원가입</NavItem>
        <NavItem to='/sign-in'>로그인</NavItem>
      </NavBar>
    </Header>
  );
};

export default HeaderNav;
