import { memo } from 'react';

type Props = {
  onClick: () => void;
};

function UndoButton({ onClick }: Props) {
  return (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: 30, marginRight: '0.5rem' }}>⟲</span>{' '}
      <span style={{ marginTop: '3px' }}>Undo</span>
    </button>
  );
}

export default memo(UndoButton);
