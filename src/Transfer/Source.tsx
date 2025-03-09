import React, { useEffect } from 'react';
import { InternalItem, Item } from './Item';
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
  Header: React.FC;
} = ({ children }) => {
  const { sourceItems, setSourceItems, setOriginalSourceItems } = useTransferContext();
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
    setSourceItems(childrenSource);
    setOriginalSourceItems(childrenSource);
  }, []);

  return (
    <div>
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
Source.Header = () => {
  return <>Source.Header</>;
};

export { Source };
