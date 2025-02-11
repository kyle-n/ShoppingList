import { Item } from './types';

type Props = {
  onSubmit: (newItem: Item) => void;
};

function ItemInput({ onSubmit }: Props) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.elements.namedItem('item') as HTMLInputElement;
        onSubmit({ name: input.value, id: Date.now().toString() });
        input.value = '';
      }}
      style={{ display: 'flex' }}
    >
      <input
        type="text"
        id="item"
        placeholder="Item name"
        style={{ marginRight: '1rem' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemInput;
