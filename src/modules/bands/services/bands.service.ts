import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateBandData, UpdateBandData } from 'src/graphql.schema';

@Injectable()
export class BandsService {
  async createBands(args: CreateBandData, jwtToken: string) {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: args,
      url: process.env.BANDS_URL,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response: AxiosResponse = await axios(config);
    return response.data;
  }

  async deleteBands(id: string, jwtToken: string) {
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      data: '',
      url: process.env.BANDS_URL + `/${id}`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response: AxiosResponse = await axios(config);
    console.log(response.data);
  }

  async updateBand(id: string, args: UpdateBandData, jwtToken: string) {
    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: args,
      url: process.env.BANDS_URL + `/${id}`,
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
      url: process.env.BANDS_URL + `/${id}`,
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
      url: process.env.BANDS_URL,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response: AxiosResponse = await axios(config);
    return response.data.items;
  }
}
