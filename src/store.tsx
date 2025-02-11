import { Item } from './types';

type GlobalState = {
  items: Item[];
}

export const initialGlobalState: GlobalState = {
  items: [],
};

export type Action =
  | { type: 'addItem'; newItem: Item }
  | { type: 'deleteItem'; id: string }
  | { type: 'updateName'; id: string; newName: string };

export function globalStateReducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case 'addItem':
      return { ...state, items: [...state.items, action.newItem] };
    case 'deleteItem':
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    case 'updateName':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    default:
      return state;
  }
}