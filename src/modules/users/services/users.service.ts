import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USERS_URL,
    });
  }
}
