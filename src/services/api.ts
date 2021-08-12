import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=50&type=multiple',
});
