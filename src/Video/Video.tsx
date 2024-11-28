import React, { ElementType, FC, ReactNode, useEffect } from 'react';

import { CSSModule } from 'reactstrap/types/lib/utils';
import { InputProps } from '../Input/Input';

import { VideoPlayer } from 'bootstrap-italia'

export interface VideoProps extends InputProps {
  /** Label da mostrare per il componente */
  label: string | ReactNode;
  /** Dimensioni ammissibili per il componente */
  bsSize?: 'lg' | 'sm';
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: React.Ref<HTMLInputElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  testId?: string;
}

export const Video: FC<VideoProps> = ({ label, testId }) => {
  useEffect(() => {
    const el = document.querySelector('video');
    if (el) {
      new VideoPlayer(el);
    }
  });
  return (
    <div className="row" data-testid={testId}>
      <video controls data-bs-video>
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      </video>
      <div className="vjs-transcription accordion">
        <div className="accordion-item">
          <h2 className="accordion-header " id="transcription-head1">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription1" aria-expanded="true" aria-controls="transcription">
              {label}
            </button>
          </h2>
          <div id="transcription1" className="accordion-collapse collapse" role="region" aria-labelledby="transcription-head1">
            <div className="accordion-body">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
