import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TracksService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  findById(id: string) {
    throw new Error('Method not implemented.');
  }
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.TRACKS_URL,
    });
  }
}
