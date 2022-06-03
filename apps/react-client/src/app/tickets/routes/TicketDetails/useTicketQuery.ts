import { Ticket } from '@acme/shared-models';
import { useQuery, useQueryClient } from 'react-query';
import { TicketApi } from '../../TicketApi';

export const useTicketQuery = (ticketId: string | number | undefined = '') => {
  const parsedTicketId = +ticketId;
  const queryClient = useQueryClient();

  return useQuery({
    queryFn: () => TicketApi.getTicket(parsedTicketId),
    queryKey: ['tickets', parsedTicketId],
    // enabled: !isNaN(parsedTicketId),
    initialData: queryClient
      .getQueryData<Ticket[]>('tickets')
      ?.find((ticket) => ticket.id === parsedTicketId),
  });
};
