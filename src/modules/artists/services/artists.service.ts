import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ArtistsService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  findById(id: string) {
    throw new Error('Method not implemented.');
  }
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTISTS_URL,
    });
  }
}
