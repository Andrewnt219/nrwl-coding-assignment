import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mockApiResponse } from 'apps/react-client/src/test';
import { queryClient } from 'apps/react-client/src/lib';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { TicketDetails } from './TicketDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
  useNavigate: jest.fn(),
}));

const mockUser = mockApiResponse.users[0];
const mockTicket = mockApiResponse.tickets[0];

const server = setupServer(
  rest.get('/api/users/*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUser));
  }),
  rest.get('/api/tickets/*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTicket));
  })
);

describe('TicketDetails', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterAll(() => server.close());
  afterEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });

  it("should show ticket's details", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TicketDetails />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const userText = await screen.findByText(mockUser.name, { exact: false });
    const ticketText = await screen.findByText(mockTicket.description, {
      exact: false,
    });

    expect(userText).toBeInTheDocument();
    expect(ticketText).toBeInTheDocument();
  });
});
