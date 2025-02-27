import { memo, useCallback } from 'react';
import { Item } from './types';

type Props = {
  item: Item;
  isDuplicated: boolean;
  onDelete: (id: string) => void;
  onChangeName: (id: string, newName: string) => void;
};

function ItemListEntry({ item, isDuplicated, onDelete, onChangeName }: Props) {
  const deleteSelf = useCallback(() => onDelete(item.id), [item.id, onDelete]);

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
