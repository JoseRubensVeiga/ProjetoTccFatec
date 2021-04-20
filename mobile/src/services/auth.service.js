import axios from 'axios';

class AuthService {
  #http;

  constructor() {
    this.#http = axios.create({
      baseURL: 'https://dcode-backend.herokuapp.com',
    });
  }

  getUsers() {
    return this.#http.get('users').then((r) => r.data);
  }
}

export default new AuthService();
