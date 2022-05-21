import { useMutation, useQueryClient } from 'react-query';
import { TicketApi } from '../../TicketApi';

export const useAssignUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: TicketApi.assignUser,
    onSuccess: () => queryClient.invalidateQueries(['tickets']),
  });
};
