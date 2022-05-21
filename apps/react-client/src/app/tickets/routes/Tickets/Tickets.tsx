import { Ticket } from '@acme/shared-models';
import { useTicketFilterStore } from 'apps/react-client/src/stores';
import { useMemo } from 'react';
import { TicketAdd, TicketItem, TicketsFilter } from '../../components';
import styles from './tickets.module.css';

export interface TicketsProps {
  tickets?: Ticket[];
}

export function Tickets(props: TicketsProps) {
  const { filter } = useTicketFilterStore();

  const filteredTickets: Ticket[] = useMemo(() => {
    const tickets = new Set<Ticket>();
    for (const ticket of props.tickets ?? []) {
      if (filter.byComplete && ticket.completed) tickets.add(ticket);
      if (filter.byIncomplete && !ticket.completed) tickets.add(ticket);
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
