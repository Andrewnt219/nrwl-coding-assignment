import { useMutation, useQueryClient } from 'react-query';
import { TicketApi } from '../../TicketApi';

export const useCreateTicketMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TicketApi.createTicket,
    onSuccess: () => queryClient.invalidateQueries('tickets'),
  });
};
