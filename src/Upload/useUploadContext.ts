import { createContext, useContext } from 'react';

interface UploadContextType {
  tipologia: 'file' | 'gallery';
}

export const UploadContext = createContext<UploadContextType>({
  tipologia: 'file'
});

export const useUploadContext = () => {
  const { tipologia } = useContext(UploadContext);
  return tipologia;
};
