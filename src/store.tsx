import { Item } from './types';

type GlobalState = {
  items: Item[];
  events: Array<{
    action: Action;
    previousValue?: unknown;
  }>;
};

export const initialGlobalState: GlobalState = {
  items: [],
  events: []
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
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        items: [...state.items, action.newItem],
        events: [...state.events, { action }]
      };
    case 'deleteItem':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        events: [
          ...state.events,
          {
            action,
            previousValue: state.items.find(item => item.id === action.id)
          }
        ]
      };
    case 'updateName':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
        events: [
          ...state.events,
          {
            action,
            previousValue: state.items.find(item => item.id === action.id)?.name ?? ''
          }
        ]
      };
    case 'undo': {
      if (state.events.length === 0) {
        return state;
      }
      return undoActionReducer(state);
    }
    default:
      return state;
  }
}

function undoActionReducer(state: GlobalState): GlobalState {
  const newState = structuredClone(state);
  const lastEvent = newState.events.pop()!;
  const { action } = lastEvent;
  switch (action.type) {
    case 'addItem':
      return {
        ...newState,
        items: newState.items.filter(item => item.id !== action.newItem.id)
      };
    case 'deleteItem': {
      const deletedItem = lastEvent.previousValue as Item;
      return {
        ...newState,
        items: [...newState.items, deletedItem]
      };
    }
    case 'updateName': {
      const previousName = lastEvent.previousValue as string;
      return {
        ...newState,
        items: newState.items.map(item =>
          item.id === action.id ? { ...item, name: previousName } : item
        )
      };
    }
    default:
      return newState;
  }
}
