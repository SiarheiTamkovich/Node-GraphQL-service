import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GenresService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.G_URL,
    });
  }
}
