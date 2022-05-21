import { Ticket } from '@acme/shared-models';
import { render, screen } from '@testing-library/react';
import { queryClient } from 'apps/react-client/src/lib';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { TicketItem } from './TicketItem';

describe('TicketItem', () => {
  it('should render a single ticket', () => {
    const ticket: Ticket = {
      assigneeId: null,
      completed: false,
      description: 'test',
      id: 1,
    };

    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TicketItem ticket={ticket} />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const link = screen.getByRole('link', {
      name: new RegExp(ticket.description, 'i'),
    });
    const markCompletebutton = screen.getByRole('button', {
      name: new RegExp('Mark as complete', 'i'),
    });

    expect(link).toBeInTheDocument();
    expect(markCompletebutton).toBeInTheDocument();
  });
});
