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
  background-color: transparent;
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
      return history.push(ClientPath.SignIn);
    }
    openModal.setSearchHistoryModal(true);
  }, []);

  return (
    <Header>
      <Logo
        src={ImagePath.MainLogo}
        onClick={() => history.push(ClientPath.FindPath)}
      />
      <NavBar>
        <NavItem to={ClientPath.FindPath}>?????????</NavItem>
        <NavItem to={ClientPath.StoreBox}>???????????????</NavItem>
        <NavItem to={ClientPath.LostAndFound}>???????????????</NavItem>
        <NavItem to={ClientPath.UserComplain}>??????</NavItem>
        <NavItem to={ClientPath.Bookmark}>????????????</NavItem>
        <OpenSearchHistory
          type='submit'
          onClick={handleClick}
        >
          ????????????
        </OpenSearchHistory>
        <VerticalLine />
        {!Login.userId ?
          <>
            <NavItem to={ClientPath.SignUp}>????????????</NavItem>
            <NavItem to={ClientPath.SignIn}>?????????</NavItem>
          </> :
          <>
            <NavItem to={ClientPath.MyPage + userInfo.userId}>???????????????</NavItem>
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
