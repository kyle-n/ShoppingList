import { useState } from 'react'

function App() {
  const [items, setItems] = useState<Array<{name: string; id: string}>>([])

  return (
    <>
    <header>
      <h1>Shopping List</h1>
    </header>
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const form = event.target as HTMLFormElement
          const input = form.elements.namedItem('item') as HTMLInputElement
          setItems([...items, { name: input.value, id: Date.now().toString() }])
          input.value = ''
        }}
        style={{display: 'flex'}}
      >
        <input type="text" id="item" placeholder="Item name" style={{marginRight: '1rem'}} />
        <button type="submit">Add</button>
      </form>
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
