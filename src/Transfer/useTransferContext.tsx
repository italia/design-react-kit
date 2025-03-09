import React, { createContext, useContext, useMemo, useState } from 'react';

interface TransferContextType {
  sourceItems: { id: string; content: React.ReactNode }[];
  targetItems: { id: string; content: React.ReactNode }[];
  originalSourceItems: { id: string; content: React.ReactNode }[];
  originalTargetItems: { id: string; content: React.ReactNode }[];
  sourceCandidates: string[];
  targetCandidates: string[];
  setSourceItems: (items: { id: string; content: React.ReactNode }[]) => void;
  setTargetItems: (items: { id: string; content: React.ReactNode }[]) => void;
  setSourceCandidates: (items: string[]) => void;
  setTargetCandidates: (items: string[]) => void;
  setOriginalSourceItems: (items: { id: string; content: React.ReactNode }[]) => void;
  setOriginalTargetItems: (items: { id: string; content: React.ReactNode }[]) => void;
}

export const TransferContext = createContext<TransferContextType>({
  sourceItems: [],
  targetItems: [],
  sourceCandidates: [],
  targetCandidates: [],
  originalSourceItems: [],
  originalTargetItems: [],
  setSourceItems: () => {},
  setTargetItems: () => {},
  setSourceCandidates: () => {},
  setTargetCandidates: () => {},
  setOriginalSourceItems: () => {},
  setOriginalTargetItems: () => {}
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
      setSourceItems,
      setTargetItems,
      setSourceCandidates,
      setTargetCandidates,
      originalSourceItems,
      originalTargetItems,
      setOriginalSourceItems,
      setOriginalTargetItems
    }),
    [sourceItems, targetItems, sourceCandidates, targetCandidates, originalSourceItems, originalTargetItems]
  );

  return <TransferContext.Provider value={value}>{children}</TransferContext.Provider>;
};
