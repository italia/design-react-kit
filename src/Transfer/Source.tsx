import React, { useEffect } from 'react';
import { InternalItem, Item } from './Item';
import { SelectAllCheckbox } from './SelectAllCheckbox';
import { useTransferContext } from './useTransferContext';

const SourceItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { sourceCandidates, setSourceCandidates } = useTransferContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSourceCandidates([...new Set([...sourceCandidates, e.target.id])]);
    } else {
      setSourceCandidates(sourceCandidates.filter((item) => item !== e.target.id));
    }
  };
  const isChecked = sourceCandidates.includes(id);
  return (
    <InternalItem checked={isChecked} id={id} onChange={handleChange}>
      {children}
    </InternalItem>
  );
};

const Source: React.FC<{ children?: React.ReactNode }> & {
  Header: React.FC<{ children?: React.ReactNode }>;
} = ({ children }) => {
  const { sourceItems, setSourceItems } = useTransferContext();
  const otherComponents: React.ReactNode[] = [];
  const childrenSource = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      const { id, children } = child.props;
      return { id, content: children };
    }
    otherComponents.push(child);
    return null;
  })?.filter((item) => item !== null);

  useEffect(() => {
    if (!childrenSource) return;
    setSourceItems({ items: childrenSource, setOriginals: true });
  }, []);

  return (
    <div className='it-transfer-wrapper source' data-testid='transfer-source'>
      {otherComponents}
      {sourceItems.map(({ id, content }) => (
        <SourceItem key={id} id={id}>
          {content}
        </SourceItem>
      ))}

      <br />
    </div>
  );
};

Source.Header = ({ children }: { children?: React.ReactNode }) => {
  const { sourceItems, sourceCandidates, setSourceCandidates } = useTransferContext();

  const getStatus = () => {
    if (sourceCandidates.length === 0) {
      return { checked: false };
    }
    if (sourceItems.every((item) => sourceCandidates.includes(item.id))) {
      return { checked: true };
    }
    return { checked: false, className: 'semi-checked' };
  };

  return (
    <div className='transfer-header' data-testid='transfer-source-header'>
      <SelectAllCheckbox
        {...getStatus()}
        onChange={(e) => {
          if (e.target.checked) {
            setSourceCandidates([...new Set(sourceItems.map((item) => item.id))]);
          } else {
            setSourceCandidates([]);
          }
        }}
        id='transfer-source-header'
        description={children ? 'Source' : undefined}
      >
        {children ? children : 'Source'}
      </SelectAllCheckbox>
    </div>
  );
};

export { Source };
