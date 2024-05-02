import axios from 'axios';

export const apiService = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'X-Device-Id': process.env.DEVICE_ID,
  },
});
