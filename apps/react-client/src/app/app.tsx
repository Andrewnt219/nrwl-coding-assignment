import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Ticket, User } from '@acme/shared-models';

import styles from './app.module.css';
import { TicketApi, Tickets } from './tickets';
import { useQuery } from 'react-query';

const App = () => {
  const ticketQuery = useQuery({
    queryFn: TicketApi.getTickets,
    queryKey: 'tickets',
  });
  const [users, setUsers] = useState([] as User[]);

  if (ticketQuery.error) {
    return <h1>Cannot get tickets</h1>;
  }

  // Very basic way to synchronize state with server.
  // Feel free to use any state/fetch library you want (e.g. react-query, xstate, redux, etc.).
  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch('/api/users').then();
      setUsers(await data.json());
    }

    fetchUsers();
  }, []);

  return (
    <div className={styles['app']}>
      <h1>Ticketing App</h1>
      <Routes>
        <Route path="/" element={<Tickets tickets={ticketQuery.data} />} />

        {/* Hint: Try `npx nx g component TicketDetails --no-export` to generate this component  */}
        <Route path="/:id" element={<h2>Details Not Implemented</h2>} />
      </Routes>
    </div>
  );
};

export default App;
