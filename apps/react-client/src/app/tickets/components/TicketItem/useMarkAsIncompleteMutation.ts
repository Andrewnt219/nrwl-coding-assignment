import { useMutation, useQueryClient } from 'react-query';
import { TicketApi } from '../../TicketApi';

export const useMarkAsIncompleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TicketApi.markTicketAsIncomplete,
    onSuccess: () => queryClient.invalidateQueries(['tickets']),
  });
};
