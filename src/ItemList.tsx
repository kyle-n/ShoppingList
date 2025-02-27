import { memo, useCallback } from 'react';
import ItemListEntry from './ItemListEntry';
import { Item } from './types';

type Props = {
  items: Item[];
  onDelete: (id: string) => void;
  onChangeName: (id: string, newName: string) => void;
};

function ItemList({ items, onDelete, onChangeName }: Props) {
  const isDuplicated = useCallback((items: Item[], item: Item) => {
    const normalizedItemName = item.name.toLowerCase().trim();
    return items.some(
      otherItem =>
        otherItem.id !== item.id &&
        otherItem.name.toLowerCase().trim() === normalizedItemName
    );
  }, []);

  return (
    <div>
      {items.map(item => (
        <ItemListEntry
          key={item.id}
          item={item}
          isDuplicated={isDuplicated(items, item)}
          onDelete={onDelete}
          onChangeName={onChangeName}
        />
      ))}
    </div>
  );
}

export default memo(ItemList);
