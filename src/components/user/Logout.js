import {observer} from 'mobx-react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Api } from '../../lib/customAxios';
import { ServerPath } from '../../lib/dataPath';
import { getUserInfo, removeUserInfo } from '../../lib/localStorage';
import indexStore from '../../stores/indexStore';

const LogoutBtn = styled.button`
  margin-top: 0;
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
  word-break keep-all;
  padding: 0;
  border: 0;
`;

const Logout = () => {
  const {Login} = indexStore();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    Api({
      method: 'POST',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.logOut}`,
      headers: {
        Authorization: `Bearer ${getUserInfo().accessToken}`,
      }
    })
      .then(() => {
        removeUserInfo();
        Login.setUserId('');
        history.push('/');
      })
      .catch((err) => {
        return err;
      })
  }

  return (
    <LogoutBtn
      type='submit'
      onClick={handleClick}
    >
      로그아웃
    </LogoutBtn>
  )
}

export default observer(Logout);