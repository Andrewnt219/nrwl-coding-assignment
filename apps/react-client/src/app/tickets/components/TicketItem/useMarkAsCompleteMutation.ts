import { useMutation, useQueryClient } from 'react-query';
import { TicketApi } from '../../TicketApi';

export const useMarkAsCompleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: TicketApi.markTicketAsComplete,
    onSuccess: () => queryClient.invalidateQueries(['tickets']),
  });
};
