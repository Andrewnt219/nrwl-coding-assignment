import { Ticket } from '@acme/shared-models';
import { useTicketItem } from './useTicketItem';

export interface TicketProps {
  ticket: Ticket;
}

export function TicketItem({ ticket }: TicketProps) {
  const { markAsCompleteMutation, markAsIncompleteMutation } = useTicketItem();

  const isDisabledCompleteButton =
    markAsCompleteMutation.isLoading || markAsIncompleteMutation.isLoading;
  const onCompleteButtonClick = () =>
    ticket.completed
      ? markAsIncompleteMutation.mutate(ticket.id)
      : markAsCompleteMutation.mutate(ticket.id);

  return (
    <div>
      Ticket: {ticket.id}, {ticket.description}
      <button
        disabled={isDisabledCompleteButton}
        onClick={onCompleteButtonClick}
      >
        {ticket.completed ? 'Mark as incomplete' : 'Mark as complete'}
      </button>
    </div>
  );
}
