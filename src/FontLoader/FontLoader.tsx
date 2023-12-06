import { loadFonts } from 'bootstrap-italia'

export interface FontLoaderProps {
  /**
   * Una lista di font aggiuntivi da caricare.
   * I font di default Titillium Web, Lora and Roboto Mono vengono aggiunti a questa lista e caricati sempre.
   * */
  fonts?: string[];
}



export const FontLoader = () => {
  loadFonts('/bootstrap-italia/dist/fonts')
  return null;
};
