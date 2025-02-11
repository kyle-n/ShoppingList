import { memo, useCallback, useMemo } from 'react';
import { Item } from './types';

type Props = {
  item: Item;
  items: Item[];
  onDelete: (id: string) => void;
};

function ItemListEntry({ item, items, onDelete }: Props) {
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
    <li>
      <span style={{ color: isDuplicated ? 'red' : undefined }}>
        {item.name}
      </span>
      <button onClick={deleteSelf} style={{ marginLeft: '1rem' }}>
        Delete
      </button>
    </li>
  );
}

export default memo(ItemListEntry);
