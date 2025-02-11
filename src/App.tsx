import { useState } from 'react';
import ItemInput from './ItemInput';
import { Item } from './types';

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
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
