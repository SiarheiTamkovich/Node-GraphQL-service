import fetch from 'node-fetch';

export const testApi = async () => {
  console.log('Run test Api ...');

  const URL = 'https://jsonplaceholder.typicode.com/posts/1';
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

  return await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((resp) => resp.json());
};
