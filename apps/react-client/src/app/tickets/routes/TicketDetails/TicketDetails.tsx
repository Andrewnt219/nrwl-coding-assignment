import { useTicketDetails } from './useTicketDetails';
import { useNavigate } from 'react-router-dom';
export function TicketDetails() {
  const { ticketQuery, assignedUserQuery } = useTicketDetails();
  const navigate = useNavigate();

  const onBackButtonClick = () => navigate(-1);

  if (ticketQuery.error || assignedUserQuery.error) {
    return <h1>Fail to fetch ticket</h1>;
  }

  if (!ticketQuery.data || !assignedUserQuery.data) {
    return <h1>Fetching ticket</h1>;
  }

  return (
    <section>
      <h1>Ticket details</h1>

      <dl>
        <dt>Title</dt>
        <dd>{ticketQuery.data.description}</dd>

        <dt>Complete</dt>
        <dd>{ticketQuery.data.completed ? 'True' : 'False'}</dd>

        <dt>User</dt>
        <dd>{assignedUserQuery.data.name}</dd>
      </dl>

      <button onClick={onBackButtonClick}>Back</button>
    </section>
  );
}
