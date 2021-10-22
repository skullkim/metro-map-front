import {observer} from 'mobx-react';
import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ClientPath, ImagePath } from "../../lib/dataPath";
import { getUserInfo } from '../../lib/localStorage';
import indexStore from '../../stores/indexStore';

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
  &:hover {
    cursor: pointer;
  }
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
  const [userInfo, setUserInfo] = useState('');
  const history = useHistory();
  const {Login} = indexStore();

  useEffect(() => {
    setUserInfo(getUserInfo());
  }, [Login.userId])

  return (
    <Header>
      <Logo src={ImagePath.mainLogo} onClick={() => history.push(ClientPath.findPath)}/>
      <NavBar>
        <NavItem to={ClientPath.findPath}>길찾기</NavItem>
        <NavItem to='/lost-and-found'>유실물센터</NavItem>
        <NavItem to='/book-mark'>즐겨찾기</NavItem>
        <VerticalLine />
        {!Login.userId && !userInfo?
          <>
            <NavItem to={ClientPath.signUp}>회원가입</NavItem>
            <NavItem to={ClientPath.signIn}>로그인</NavItem>
          </> :
          <>
            <NavItem to={ClientPath.myPage}>마이페이지</NavItem>
            <NavItem to={ClientPath.logOut}>로그아웃</NavItem>
          </>
        }
      </NavBar>
    </Header>
  );
};

export default observer(HeaderNav);
