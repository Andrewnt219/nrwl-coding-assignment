import { useParams } from 'react-router';
import { useAssignedUserQuery } from './useAssignedUserQuery';
import { useTicketQuery } from './useTicketQuery';

type RouteParams = Record<'id', string>;

export const useTicketDetails = () => {
  const { id } = useParams<RouteParams>();
  const ticketQuery = useTicketQuery(id);
  const assignedUserQuery = useAssignedUserQuery(ticketQuery.data?.assigneeId);

  return { ticketQuery, assignedUserQuery };
};
