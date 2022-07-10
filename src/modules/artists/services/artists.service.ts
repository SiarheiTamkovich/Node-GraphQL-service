import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateArtistData, UpdateArtistData } from 'src/graphql.schema';

@Injectable()
export class ArtistsService {
  async createArtist(args: CreateArtistData, jwtToken: string) {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: args,
      url: process.env.ARTIST_URL,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response: AxiosResponse = await axios(config);
    return response.data;
  }

  async deleteArtist(id: string, jwtToken: string) {
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      data: '',
      url: process.env.ARTIST_URL + `/${id}`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response: AxiosResponse = await axios(config);
    console.log(response.data);
  }

  async updateArtist(id: string, args: UpdateArtistData, jwtToken: string) {
    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: args,
      url: process.env.ARTIST_URL + `/${id}`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response: AxiosResponse = await axios(config);
    return response.data;
  }

  async findOneById(id: string) {
    const config: AxiosRequestConfig = {
      method: 'GET',
      data: '',
      url: process.env.ARTIST_URL + `/${id}`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response: AxiosResponse = await axios(config);
    return response.data;
  }

  async findAll() {
    const config: AxiosRequestConfig = {
      method: 'GET',
      data: '',
      url: process.env.ARTIST_URL,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response: AxiosResponse = await axios(config);
    return response.data.items;
  }
}
