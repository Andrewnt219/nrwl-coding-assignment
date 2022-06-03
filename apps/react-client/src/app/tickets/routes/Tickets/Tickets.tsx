import { Ticket } from '@acme/shared-models';
import {
  TicketFilter,
  useTicketFilterStore,
} from 'apps/react-client/src/stores';
import { useMemo } from 'react';
import { TicketAdd, TicketItem, TicketsFilter } from '../../components';
import styles from './tickets.module.css';

export interface TicketsProps {
  tickets?: Ticket[];
}

const isValidTicket = (ticket: Ticket, filter: TicketFilter): boolean => {
  let result = false;
  if (filter.byComplete && ticket.completed) result = true;
  if (filter.byIncomplete && !ticket.completed) result = true;
  return result;
};

export function Tickets(props: TicketsProps) {
  const { filter } = useTicketFilterStore();

  const filteredTickets: Ticket[] = useMemo(() => {
    const tickets = new Set<Ticket>();
    for (const ticket of props.tickets ?? []) {
      if (
        filter.searchTerm.trim().length === 0 &&
        isValidTicket(ticket, filter)
      ) {
        tickets.add(ticket);
      }

      if (
        filter.searchTerm.trim().length > 0 &&
        ticket.description
          .toLowerCase()
          .includes(filter.searchTerm.toLowerCase()) &&
        isValidTicket(ticket, filter)
      ) {
        tickets.add(ticket);
      }
    }
    return Array.from(tickets);
  }, [filter, props.tickets]);

  return (
    <section className={styles['page']}>
      <h2>Tickets</h2>
      <TicketAdd />
      <TicketsFilter />
      <ul aria-label="tickets" className={styles['tickets']}>
        {Array.from(filteredTickets).map((ticket) => (
          <li key={ticket.id}>
            <TicketItem ticket={ticket} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tickets;
