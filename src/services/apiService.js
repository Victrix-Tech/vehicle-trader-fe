// src/services/apiService.js
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const vendorService = {
  signUp(payload) {
    return api.post('vendor/auth/sign-up', payload);
  },
  login(payload) {
    return api.post('vendor/auth/login', payload);
  }
};

export const adminService = {
  login(payload) {
    return api.post('admin/auth/login', payload);
  },
};

export const customerService = {
  signUp(payload) {
    return api.post('customer/auth/sign-up', payload);
  },
  login(payload) {
    return api.post('customer/auth/login', payload);
  }

};

export default  { vendorService, adminService, customerService };
