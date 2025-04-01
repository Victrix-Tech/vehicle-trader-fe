// src/services/apiService.js
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const vendorService = {
  signUp(payload) {
    return api.post('vendor/auth/sign-up', payload);
  },
  login(payload) {
    return api.post('vendor/auth/login', payload);
  }
};

export default vendorService;
