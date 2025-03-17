import React, { useEffect } from 'react';
import { InternalItem, Item } from './Item';
import { SelectAllCheckbox } from './SelectAllCheckbox';
import { useTransferContext } from './useTransferContext';

const TargetItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { targetCandidates, setTargetCandidates } = useTransferContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTargetCandidates([...new Set([...targetCandidates, e.target.id])]);
    } else {
      setTargetCandidates(targetCandidates.filter((item) => item !== e.target.id));
    }
  };
  const isChecked = targetCandidates.includes(id);
  return (
    <InternalItem checked={isChecked} id={id} onChange={handleChange}>
      {children}
    </InternalItem>
  );
};

const Target: React.FC<{ children?: React.ReactNode }> & {
  Header: React.FC<{ children?: React.ReactNode }>;
} = ({ children }) => {
  const { targetItems, setTargetItems } = useTransferContext();
  const otherComponents: React.ReactNode[] = [];
  const childrenTarget = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      const { id, children } = child.props;
      return { id, content: children };
    }
    otherComponents.push(child);
    return null;
  })?.filter((item) => item !== null);

  useEffect(() => {
    if (!childrenTarget) return;
    setTargetItems({ items: childrenTarget, setOriginals: true });
  }, []);

  return (
    <div className='it-transfer-wrapper target' data-testid='transfer-target'>
      {otherComponents}
      {targetItems.map(({ id, content }) => (
        <TargetItem key={id} id={id}>
          {content}
        </TargetItem>
      ))}
    </div>
  );
};

Target.Header = ({ children }: { children?: React.ReactNode }) => {
  const { targetItems, targetCandidates, setTargetCandidates } = useTransferContext();

  const getStatus = () => {
    if (targetCandidates.length === 0) {
      return { checked: false };
    }
    if (targetItems.every((item) => targetCandidates.includes(item.id))) {
      return { checked: true };
    }
    return { checked: false, className: 'semi-checked' };
  };

  return (
    <div className='transfer-header' data-testid='transfer-target-header'>
      <SelectAllCheckbox
        {...getStatus()}
        onChange={(e) => {
          if (e.target.checked) {
            setTargetCandidates([...new Set(targetItems.map((item) => item.id))]);
          } else {
            setTargetCandidates([]);
          }
        }}
        id='transfer-target-header'
        description={children ? 'Target' : undefined}
      >
        {children ? children : 'Target'}
      </SelectAllCheckbox>
    </div>
  );
};

export { Target };
