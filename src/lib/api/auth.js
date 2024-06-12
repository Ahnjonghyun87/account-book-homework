import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr/";

export const register = async ({ id, password, nickname }) => {
  const response = await axios.post(`${AUTH_API_HOST}/register`, {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response;
};

// 왜 AUTH_API_HOST + "/register" 는 404error생기고 `${AUTH_API_HOST}/register` 이건 잘되는지? //