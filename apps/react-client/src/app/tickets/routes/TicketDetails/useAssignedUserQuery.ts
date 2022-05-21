import { User } from '@acme/shared-models';
import { useQuery, useQueryClient } from 'react-query';
import { UserApi } from '../../../users';

export const useAssignedUserQuery = (userId: number | undefined | null) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryFn: () => UserApi.getUser(userId!),
    queryKey: ['users', userId],
    enabled: Boolean(userId),
    initialData: () =>
      queryClient
        .getQueryData<User[]>('users')
        ?.find((user) => user.id === userId),
  });
};
