import axios from 'axios';

class AuthService {
  #http;

  constructor() {
    this.#http = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  getUsers() {
    return this.#http.get('users').then((r) => r.data);
  }
}

export default new AuthService();
