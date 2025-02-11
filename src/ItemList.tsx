import ItemListEntry from './ItemListEntry';
import { Item } from './types';

type Props = {
  items: Item[];
  onDelete: (id: string) => void;
};

function ItemList({ items, onDelete }: Props) {
  return (
    <ul>
      {items.map(item => (
        <ItemListEntry key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ItemList;
