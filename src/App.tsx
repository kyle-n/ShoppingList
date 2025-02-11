import { useState } from 'react'
import ItemInput from './ItemInput';

function App() {
  const [items, setItems] = useState<Array<{name: string; id: string}>>([])

  return (
    <>
    <header>
      <h1>Shopping List</h1>
    </header>
    <main>
      <ItemInput onSubmit={newItem => setItems([...items, newItem])} />
      <hr style={{margin: '2rem 0'}} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
    </>
  )
}

export default App
