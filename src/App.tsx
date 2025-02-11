import { useCallback, useReducer } from 'react';
import ItemInput from './ItemInput';
import { Item } from './types';
import ItemList from './ItemList';
import { globalStateReducer, initialGlobalState } from './store';

function App() {
  const [state, dispatch] = useReducer(globalStateReducer, initialGlobalState);
  const addItem = useCallback(
    (newItem: Item) => dispatch({ type: 'addItem', newItem }),
    [dispatch]
  );
  const deleteItem = useCallback(
    (id: string) => dispatch({ type: 'deleteItem', id }),
    [dispatch]
  );
  const updateName = useCallback(
    (id: string, newName: string) =>
      dispatch({ type: 'updateName', id, newName }),
    [dispatch]
  );

  return (
    <>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        <ItemInput onSubmit={addItem} />
        <hr style={{ margin: '2rem 0' }} />
        <ItemList
          items={state.items}
          onDelete={deleteItem}
          onChangeName={updateName}
        />
      </main>
    </>
  );
}

export default App;
