import { useTicketAdd } from './useTicketAdd';

export function TicketAdd() {
  const { createTicketMutation } = useTicketAdd();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const formEl = ev.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const newTicketDescription = formData.get('description')?.toString().trim();
    if (newTicketDescription && newTicketDescription.length > 0) {
      createTicketMutation.mutate({ description: newTicketDescription });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input placeholder="Todo..." type="text" name="description" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
