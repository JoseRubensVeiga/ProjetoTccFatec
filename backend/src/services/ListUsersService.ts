import { getRepository } from 'typeorm';

import User from '../models/User';

export default class ListUsersService {
  public async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);

    return await usersRepository.find();
  }
}
