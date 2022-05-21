import { useTicketDetails } from './useTicketDetails';
import { useNavigate } from 'react-router-dom';
export function TicketDetails() {
  const { ticketQuery, assignedUserQuery } = useTicketDetails();
  const navigate = useNavigate();

  const onBackButtonClick = () => navigate(-1);

  if (ticketQuery.error || assignedUserQuery.error) {
    return <h1>Fail to fetch ticket</h1>;
  }

  if (!ticketQuery.data) {
    return <h1>Fetching ticket</h1>;
  }

  return (
    <section>
      <h1>Ticket details</h1>

      <p>Title: {ticketQuery.data.description}</p>
      <p>Complete: {ticketQuery.data.completed ? 'true' : 'false'}</p>
      <p>
        Assigned:{' '}
        {assignedUserQuery.data
          ? assignedUserQuery.data.name
          : '(not assigned)'}
      </p>

      <button onClick={onBackButtonClick}>Back</button>
    </section>
  );
}
