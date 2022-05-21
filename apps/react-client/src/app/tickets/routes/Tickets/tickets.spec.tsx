import { render, screen, within } from '@testing-library/react';
import { queryClient } from 'apps/react-client/src/lib';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { mockApiResponse } from 'apps/react-client/src/test';
import Tickets from './Tickets';

describe('Tickets', () => {
  it('should render a list of tickets', () => {
    const { tickets } = mockApiResponse;
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Tickets tickets={mockApiResponse.tickets} />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const ticketList = screen.getByRole('list', {
      name: 'tickets',
    });
    const ticketListItems = within(ticketList).getAllByRole('listitem');
    expect(ticketListItems).toHaveLength(tickets.length);
  });
});
