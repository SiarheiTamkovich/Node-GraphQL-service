import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GenresService {
  findById(id: any) {
    throw new Error('Method not implemented.');
  }
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_URL,
    });
  }
}
