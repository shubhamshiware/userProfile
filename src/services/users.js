import { USER_API_ENDPOINT } from './../constants';

export const getUsers = (page = 1) => {
  return fetch(`${USER_API_ENDPOINT}?page=${page}`).then((res) => res.json());
};

export const deleteUsers = (userId) => {
  const resObj = {
    method: 'DELETE',
  };
  return fetch(`${USER_API_ENDPOINT}/${userId}`, resObj).then(
    (res) => res.status === 204
  );
};

export const setUser = (user) => {
  const reqObj = {
    method: 'POST',
    body: JSON.stringify(user),
  };

  return fetch(`${USER_API_ENDPOINT}`, reqObj).then((res) => res.json());
};
