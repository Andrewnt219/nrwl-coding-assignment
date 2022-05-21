import { User } from '@acme/shared-models';
import { axios } from '../../lib';

export class UserApi {
  static async getUsers() {
    const { data } = await axios.get<User[]>('/users');
    return data;
  }

  static async getUser(userId: number) {
    const { data } = await axios.get<User>(`/users/${userId}`);
    return data;
  }
}
