import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateUserData } from 'src/graphql.schema';

@Injectable()
export class UsersService {
  async register(args: CreateUserData) {
    //console.log('Run request to Api ...');

    const config: AxiosRequestConfig = {
      method: 'POST',
      data: args,
      url: process.env.USERS_URL + '/register',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        //Authorization: `Bearer ${accessToken}`,
      },
    };

    const response: AxiosResponse = await axios(config);
    //console.log(response.data);
    return response.data;
  }
}
