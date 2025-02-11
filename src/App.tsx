import { useCallback, useReducer, useState } from 'react';
import ItemInput from './ItemInput';
import { Item } from './types';
import ItemList from './ItemList';
import { globalStateReducer, initialGlobalState } from './store';

function App() {
  const [state, dispatch] = useReducer(globalStateReducer, initialGlobalState);
  const addItem = useCallback((newItem: Item) => dispatch({ type: 'addItem', newItem }), [dispatch]);

  return (
    <>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        <ItemInput onSubmit={addItem} />
        <hr style={{ margin: '2rem 0' }} />
        <ItemList
          items={items}
          onDelete={deleteItem}
          onChangeName={updateName}
        />
      </main>
    </>
  );
}

export default App;
