import { useMarkAsCompleteMutation } from './useMarkAsCompleteMutation';
import { useMarkAsIncompleteMutation } from './useMarkAsIncompleteMutation';

export const useTicketItem = () => {
  const markAsCompleteMutation = useMarkAsCompleteMutation();
  const markAsIncompleteMutation = useMarkAsIncompleteMutation();

  return { markAsCompleteMutation, markAsIncompleteMutation };
};
