import React, { createContext, useContext, useMemo, useState } from 'react';

interface TransferContextType {
  sourceItems: { id: string; content: React.ReactNode }[];
  targetItems: { id: string; content: React.ReactNode }[];
  sourceCandidates: string[];
  targetCandidates: string[];
  setSourceItems: ({
    items,
    setOriginals
  }: {
    items: { id: string; content: React.ReactNode }[];
    setOriginals?: boolean;
  }) => void;
  setTargetItems: ({
    items,
    setOriginals
  }: {
    items: { id: string; content: React.ReactNode }[];
    setOriginals?: boolean;
  }) => void;
  setSourceCandidates: (items: string[]) => void;
  setTargetCandidates: (items: string[]) => void;
  isChanged: boolean;
  reset: () => void;
}

export const TransferContext = createContext<TransferContextType>({
  sourceItems: [],
  targetItems: [],
  sourceCandidates: [],
  targetCandidates: [],
  setSourceItems: () => {},
  setTargetItems: () => {},
  setSourceCandidates: () => {},
  setTargetCandidates: () => {},
  isChanged: false,
  reset: () => {}
});

export const useTransferContext = () => useContext(TransferContext);

export const TransferContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sourceItems, setSourceItems] = useState<{ id: string; content: React.ReactNode }[]>([]);
  const [targetItems, setTargetItems] = useState<{ id: string; content: React.ReactNode }[]>([]);
  const [sourceCandidates, setSourceCandidates] = useState<string[]>([]);
  const [targetCandidates, setTargetCandidates] = useState<string[]>([]);
  const [originalSourceItems, setOriginalSourceItems] = useState<{ id: string; content: React.ReactNode }[]>([]);
  const [originalTargetItems, setOriginalTargetItems] = useState<{ id: string; content: React.ReactNode }[]>([]);

  const value = useMemo(
    () => ({
      sourceCandidates,
      targetCandidates,
      sourceItems,
      targetItems,
      setSourceItems: ({
        items,
        setOriginals
      }: {
        items: { id: string; content: React.ReactNode }[];
        setOriginals?: boolean;
      }) => {
        setSourceItems(items);
        if (setOriginals) {
          setOriginalSourceItems(items);
        }
      },
      setTargetItems: ({
        items,
        setOriginals
      }: {
        items: { id: string; content: React.ReactNode }[];
        setOriginals?: boolean;
      }) => {
        setTargetItems(items);
        if (setOriginals) {
          setOriginalTargetItems(items);
        }
      },
      setSourceCandidates,
      setTargetCandidates,
      reset: () => {
        setSourceItems(originalSourceItems);
        setTargetItems(originalTargetItems);
        setSourceCandidates([]);
        setTargetCandidates([]);
      },
      isChanged:
        JSON.stringify(sourceItems) !== JSON.stringify(originalSourceItems) ||
        JSON.stringify(targetItems) !== JSON.stringify(originalTargetItems)
    }),
    [sourceItems, targetItems, sourceCandidates, targetCandidates, originalSourceItems, originalTargetItems]
  );

  return <TransferContext.Provider value={value}>{children}</TransferContext.Provider>;
};

export const useTransfer = () => {
  const { sourceItems, targetItems, sourceCandidates, targetCandidates } = useTransferContext();

  return {
    source: sourceItems.map((item) => {
      return { ...item, checked: sourceCandidates.includes(item.id) };
    }),
    target: targetItems.map((item) => {
      return { ...item, checked: targetCandidates.includes(item.id) };
    })
  };
};
