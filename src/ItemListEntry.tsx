import { memo, useCallback, useMemo } from 'react';
import { Item } from './types';

type Props = {
  item: Item;
  items: Item[];
  onDelete: (id: string) => void;
  onChangeName: (id: string, newName: string) => void;
};

function ItemListEntry({ item, items, onDelete, onChangeName }: Props) {
  const deleteSelf = useCallback(() => onDelete(item.id), [item.id, onDelete]);
  const isDuplicated = useMemo(() => {
    const normalizedItemName = item.name.toLowerCase().trim();
    return items.some(
      otherItem =>
        otherItem.id !== item.id &&
        otherItem.name.toLowerCase().trim() === normalizedItemName
    );
  }, [item.id, item.name, items]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        value={item.name}
        style={{ border: isDuplicated ? '1px solid red' : undefined }}
        onChange={event => {
          const newName = event.target.value;
          onChangeName(item.id, newName);
        }}
      />
      <button onClick={deleteSelf} style={{ marginLeft: '1rem' }}>
        Delete
      </button>
    </div>
  );
}

export default memo(ItemListEntry);
