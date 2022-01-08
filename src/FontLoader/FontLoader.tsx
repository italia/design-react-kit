import { useEffect } from 'react';

export interface FontLoaderProps {
  /**
   * Una lista di font aggiuntivi da caricare.
   * I font di default Titillium Web, Lora and Roboto Mono vengono aggiunti a questa lista e caricati sempre.
   * */
  fonts?: string[];
}

const defaultFonts = [
  'Titillium Web:300,400,600,700:latin-ext',
  'Lora:400,700:latin-ext',
  'Roboto Mono:400,700:latin-ext'
];

export function useFontLoader({ fonts }: FontLoaderProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WebFont = require('webfontloader');
      WebFont.load({
        custom: {
          families: [...defaultFonts, ...(fonts || [])]
        }
      });
    }
  }, [fonts]);
}

export const FontLoader = (props: FontLoaderProps) => {
  useFontLoader(props);

  return null;
};
