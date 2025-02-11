import { useState } from 'react';
import ItemInput from './ItemInput';
import { Item } from './types';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        <ItemInput onSubmit={newItem => setItems([...items, newItem])} />
        <hr style={{ margin: '2rem 0' }} />
        <ItemList
          items={items}
          onDelete={id => setItems(prev => prev.filter(item => item.id !== id))}
        />
      </main>
    </>
  );
}

export default App;
