import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const testApi = async () => {
  console.log('Run test Api ...');

  const URL = 'https://jsonplaceholder.typicode.com/posts';
  //const URL = process.env.USERS_URL + '/register'
  const postData = {
    id: 1,
    title: 'New Post',
    body: 'this a new test post',
    userId: 1,
  };
  const userData = {
    firstName: 'FirsName',
    lastName: 'LastName',
    password: 'pass1234N*',
    email: 'mail1245@mail.ru',
  };

  const config: AxiosRequestConfig = {
    method: 'POST',
    data: postData,
    url: URL,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      //Authorization: `Bearer ${accessToken}`,
    },
  };

  const response: AxiosResponse = await axios(config);
  //const response: AxiosResponse = await axios.post(URL, postData);

  console.log(response.data);
};
