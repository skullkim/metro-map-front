import {observer} from 'mobx-react';
import {useCallback} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ClientPath, ImagePath } from "../../lib/dataPath";
import { getUserInfo } from '../../lib/localStorage';
import indexStore from '../../stores/indexStore';
import SearchHistoryModal from '../modal/searchHistoryModal/SearchHistoryModal';
import SearchResultModal from '../modal/searchResultModal/SearchResultModal';
import Logout from '../user/Logout';

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
  width: 550px;
  position: absolute;
  top: 34px;
  right: 270px;
  display: flex;
  align-items: center;
`;

const NavItem = styled(NavLink).attrs({
  exact: true,
  activeStyle: {
    color: '#2867B2',
    textDecoration: 'underline'
  }
})`
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

const OpenSearchHistory = styled.button`
  margin-top: 0;
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
  word-break: keep-all;
  padding: 0;
  border: 0;
  
  &:hover {
    cursor: grab;
  }
`;

const HeaderNav = () => {
  const history = useHistory();
  const {Login, ModalOpenStore: openModal} = indexStore();
  const userInfo = getUserInfo();

  const handleClick = useCallback((event) => {
    event.preventDefault();
    if(!userInfo) {
      return history.push(ClientPath.signIn);
    }
    openModal.setSearchHistoryModal(true);
  }, []);

  return (
    <Header>
      <Logo src={ImagePath.mainLogo} onClick={() => history.push(ClientPath.findPath)}/>
      <NavBar>
        <NavItem to={ClientPath.findPath}>길찾기</NavItem>
        <NavItem to={ClientPath.storeBox}>물품보관함</NavItem>
        <NavItem to={ClientPath.lostAndFound}>유실물센터</NavItem>
        <NavItem to={ClientPath.userComplain}>민원</NavItem>
        <NavItem to={ClientPath.bookmark}>즐겨찾기</NavItem>
        <OpenSearchHistory
          type='submit'
          onClick={handleClick}
        >
          검색기록
        </OpenSearchHistory>
        <VerticalLine />
        {!Login.userId ?
          <>
            <NavItem to={ClientPath.signUp}>회원가입</NavItem>
            <NavItem to={ClientPath.signIn}>로그인</NavItem>
          </> :
          <>
            <NavItem to={ClientPath.myPage + userInfo.userId}>마이페이지</NavItem>
            <Logout />
          </>
        }
      </NavBar>
      {openModal.searchHistoryModal && <SearchHistoryModal />}
      {openModal.searchResultModal && <SearchResultModal />}
    </Header>
  );
};

export default observer(HeaderNav);
