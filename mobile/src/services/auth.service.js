import axios from 'axios';

class AuthService {
  #http;

  constructor() {
    this.#http = axios.create({
      baseURL: 'https://dcode-backend.herokuapp.com',
    });
  }

  async getUsers() {
    const response = await this.#http.get('users');
    return response.data;
  }

  async createUser({name, email, password}) {
    const response = await this.#http.post('users', {name, email, password});
    return response.data;
  }

  async sendRecoveryPasswordEmail(email) {
    const response = await this.#http.post(
      'sessions/sendRecoveryPasswordEmail',
      {email},
    );

    return response.data;
  }

  async attempt({email, password}) {
    const response = await this.#http.post('sessions', {email, password});

    return response.data;
  }
}

export default new AuthService();
