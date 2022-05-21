import { Routes, Route } from 'react-router-dom';

import styles from './app.module.css';
import { TicketApi, Tickets } from './tickets';
import { useQuery } from 'react-query';

const App = () => {
  const ticketQuery = useQuery({
    queryFn: TicketApi.getTickets,
    queryKey: 'tickets',
  });

  if (ticketQuery.error) {
    return <h1>Error fetching tickets</h1>;
  }

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
