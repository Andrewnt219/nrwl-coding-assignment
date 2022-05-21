import { useCreateTicketMutation } from './useCreateTicketMutation';

export const useTicketAdd = () => {
  const createTicketMutation = useCreateTicketMutation();

  return { createTicketMutation };
};
