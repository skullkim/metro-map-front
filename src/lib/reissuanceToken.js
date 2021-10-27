
// eslint-disable-next-line import/no-cycle
import {Api} from './customAxios';
import { ServerPath } from './dataPath';
import { getUserInfo, removeUserInfo, setUserInfo } from './localStorage';

const reissuingAccessToken = () => {
  const {userId} = getUserInfo();

  Api({
    method: "POST",
    url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.reissuingAccessToken}`,
  })
    .then(({data: {data: {accessToken}}}) => {
      removeUserInfo();
      setUserInfo(userId, accessToken);
    })
    .catch(err => err);
}

export default reissuingAccessToken;