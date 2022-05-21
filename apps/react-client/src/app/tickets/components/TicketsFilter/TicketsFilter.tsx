import { useTicketFilterStore } from 'apps/react-client/src/stores';
import React from 'react';

export interface TicketsFilterProps {}
export function TicketsFilter() {
  const { setFilter, resetFilter, filter } = useTicketFilterStore();

  const onStatusInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setFilter({
      [ev.target.name]: ev.target.checked,
    });
  };

  return (
    <form>
      <fieldset>
        <legend>By ticket status</legend>

        <label htmlFor="ticketFilterIncompleteInput">Incomplete</label>
        <input
          name="byIncomplete"
          type="checkbox"
          id="ticketFilterIncompleteInput"
          checked={filter.byIncomplete}
          onChange={onStatusInputChange}
        />

        <label htmlFor="ticketFilterCompleteInput">Complete</label>
        <input
          name="byComplete"
          type="checkbox"
          id="ticketFilterCompleteInput"
          checked={filter.byComplete}
          onChange={onStatusInputChange}
        />
      </fieldset>

      <button type="button" onClick={resetFilter}>
        Reset
      </button>
    </form>
  );
}
