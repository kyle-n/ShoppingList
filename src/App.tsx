import { useCallback, useState } from 'react';
import ItemInput from './ItemInput';
import { Item } from './types';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = useCallback((newItem: Item) => setItems(prev => [...prev, newItem]), [setItems]);
  const deleteItem = useCallback(
    (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    },
    [setItems]
  );
  const updateName = useCallback(
    (id: string, newName: string) => {
      setItems(prev =>
        prev.map(item => (item.id === id ? { ...item, name: newName } : item))
      );
    },
    [setItems]
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
          items={items}
          onDelete={deleteItem}
          onChangeName={updateName}
        />
      </main>
    </>
  );
}

export default App;
