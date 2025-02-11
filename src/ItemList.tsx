import { memo, useCallback } from 'react';
import ItemListEntry from './ItemListEntry';
import { Item } from './types';

type Props = {
  items: Item[];
  onDelete: (id: string) => void;
  onChangeName: (id: string, newName: string) => void;
};

function ItemList({ items, onDelete, onChangeName }: Props) {
  const getIfDuplicated = useCallback((item: Item, items: Item[]) => {
    return items.filter(i => i.name === item.name).length > 1;
  }, []);

  return (
    <div>
      {items.map(item => (
        <ItemListEntry
          key={item.id}
          item={item}
          isDuplicated={getIfDuplicated(item, items)}
          onDelete={onDelete}
          onChangeName={onChangeName}
        />
      ))}
    </div>
  );
}

export default memo(ItemList);
