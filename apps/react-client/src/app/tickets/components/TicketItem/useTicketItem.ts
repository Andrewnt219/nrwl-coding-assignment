import { useAssignUserMutation } from './useAssignUserMutation';
import { useMarkAsCompleteMutation } from './useMarkAsCompleteMutation';
import { useMarkAsIncompleteMutation } from './useMarkAsIncompleteMutation';
import { useUsersQuery } from './useUsersQuery';

export const useTicketItem = () => {
  const markAsCompleteMutation = useMarkAsCompleteMutation();
  const markAsIncompleteMutation = useMarkAsIncompleteMutation();
  const assignUserMutation = useAssignUserMutation();
  const usersQuery = useUsersQuery();

  return {
    usersQuery,
    markAsCompleteMutation,
    markAsIncompleteMutation,
    assignUserMutation,
  };
};
