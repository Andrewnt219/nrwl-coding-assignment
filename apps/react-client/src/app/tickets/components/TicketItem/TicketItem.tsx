import { Ticket } from '@acme/shared-models';
import { Link } from 'react-router-dom';
import { useTicketItem } from './useTicketItem';

export interface TicketProps {
  ticket: Ticket;
}

export function TicketItem({ ticket }: TicketProps) {
  const {
    markAsCompleteMutation,
    markAsIncompleteMutation,
    assignUserMutation,
    usersQuery,
  } = useTicketItem();

  const isDisabledCompleteButton =
    markAsCompleteMutation.isLoading || markAsIncompleteMutation.isLoading;
  const onCompleteButtonClick = () =>
    ticket.completed
      ? markAsIncompleteMutation.mutate(ticket.id)
      : markAsCompleteMutation.mutate(ticket.id);

  const onUserSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    ev
  ) => {
    const userId = +ev.target.value.trim();
    if (isNaN(userId)) return;
    assignUserMutation.mutate({ ticketId: ticket.id, userId });
  };

  return (
    <div>
      <Link to={`/${ticket.id}`}>
        Ticket: {ticket.id}, {ticket.description}
      </Link>
      <select
        disabled={assignUserMutation.isLoading}
        title="available users"
        onChange={onUserSelectChange}
      >
        <option value="">(Unassigned)</option>

        {usersQuery.data?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        disabled={isDisabledCompleteButton}
        onClick={onCompleteButtonClick}
      >
        {ticket.completed ? 'Mark as incomplete' : 'Mark as complete'}
      </button>
    </div>
  );
}
