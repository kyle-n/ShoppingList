import { Item } from './types';

type GlobalState = {
  items: Item[];
  actions: Action[];
};

export const initialGlobalState: GlobalState = {
  items: [],
  actions: []
};

export type Action =
  | { type: 'addItem'; newItem: Item }
  | { type: 'deleteItem'; id: string }
  | { type: 'updateName'; id: string; newName: string }
  | { type: 'undo' };

export function globalStateReducer(
  state: GlobalState,
  action: Action
): GlobalState {
  const newState = { ...state, actions: [...state.actions, action] };
  switch (action.type) {
    case 'addItem':
      return { ...newState, items: [...newState.items, action.newItem] };
    case 'deleteItem':
      return {
        ...newState,
        items: state.items.filter(item => item.id !== action.id)
      };
    case 'updateName':
      return {
        ...newState,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, name: action.newName } : item
        )
      };
    case 'undo': {
      if (newState.actions.length < 2) {
        return state;
      }
      // Removes undo action from the actions stack
      newState.actions.pop();
      const lastAction = newState.actions.pop() as Action;
      return undoActionReducer(newState, lastAction);
    }
    default:
      return state;
  }
}

function undoActionReducer(
  state: GlobalState,
  action: Action
): GlobalState {
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.newItem.id)
      }
    default:
      return state;
  }
}
