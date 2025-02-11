import { useCallback } from 'react';
import { Item } from './types';

type Props = {
  item: Item;
  onDelete: (id: string) => void;
};

function ItemListEntry({ item, onDelete }: Props) {
  const deleteSelf = useCallback(() => onDelete(item.id), [item.id, onDelete]);
  return (
    <li>
      {item.name}
      <button onClick={deleteSelf} style={{ marginLeft: '1rem' }}>
        Delete
      </button>
    </li>
  );
}

export default ItemListEntry;
