import { memo } from 'react';
import ItemListEntry from './ItemListEntry';
import { Item } from './types';

type Props = {
  items: Item[];
  onDelete: (id: string) => void;
  onChangeName: (id: string, newName: string) => void;
};

function ItemList({ items, onDelete, onChangeName }: Props) {
  return (
    <div>
      {items.map(item => (
        <ItemListEntry
          key={item.id}
          item={item}
          items={items}
          onDelete={onDelete}
          onChangeName={onChangeName}
        />
      ))}
    </div>
  );
}

export default memo(ItemList);
