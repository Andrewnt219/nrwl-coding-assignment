import { Ticket } from '@acme/shared-models';
import { axios } from '../../lib';

export class TicketApi {
  static async getTickets(): Promise<Ticket[]> {
    const { data } = await axios.get<Ticket[]>('/tickets');
    return data;
  }

  static async getTicket(ticketId: number): Promise<Ticket> {
    const { data } = await axios.get<Ticket>(`/tickets/${ticketId}`);
    return data;
  }

  static async assignUser(ticketId: number, userId: number): Promise<void> {
    return axios.put(`/tickets/${ticketId}/assign/${userId}`);
  }

  static async markTicketAsComplete(ticketId: number): Promise<void> {
    return axios.put(`/tickets/${ticketId}/complete`);
  }

  static async markTicketAsIncomplete(ticketId: number): Promise<void> {
    return axios.delete(`/tickets/${ticketId}/complete`);
  }
}
