import { useQuery } from 'react-query';
import { UserApi } from '../../../users';

export const useUsersQuery = () =>
  useQuery({
    queryFn: UserApi.getUsers,
    queryKey: 'users',
  });
