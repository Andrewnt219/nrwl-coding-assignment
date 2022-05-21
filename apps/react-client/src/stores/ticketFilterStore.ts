import create from 'zustand';

export interface TicketFilter {
  byIncomplete: boolean;
  byComplete: boolean;
}

export interface TicketFilterStore {
  filter: TicketFilter;
  setFilter(filter: Partial<TicketFilter>): void;
  resetFilter(): void;
}

const initialFilter: TicketFilter = {
  byComplete: true,
  byIncomplete: true,
};
export const useTicketFilterStore = create<TicketFilterStore>((set) => ({
  filter: initialFilter,
  setFilter: (filter) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  resetFilter: () => set({ filter: initialFilter }),
}));
