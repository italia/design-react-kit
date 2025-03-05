import React, { ElementType, FC, useEffect } from 'react';

import { VideoPlayer } from 'bootstrap-italia';
import { CSSModule } from 'reactstrap/types/lib/utils';
import { Input, InputProps } from '../Input/Input';
import { Accordion } from '../Accordion/Accordion';
import { AccordionItem } from '../Accordion/AccordionItem';
import { AccordionHeader } from '../Accordion/AccordionHeader';
import { AccordionBody } from '../Accordion/AccordionBody';
import { Dimmer } from '../Dimmer/Dimmer';
import { DimmerButtons } from '../Dimmer/DimmerButtons';
import { Button } from '../Button/Button';
import { FormGroup, Label } from 'reactstrap';

export interface VideoSource {
  src: string;
  type: string;
}
export interface TrackSource {
  kind: string;
  src: string;
  srcLang: string;
  label: string;
  isDefault?: boolean;
}
export interface transcription {
  src: string;
  type: 'video/mp4' | 'video/webm' | 'video/ogg';
}
export interface VideoProps extends InputProps {
  /** Dimensioni ammissibili per il componente */
  bsSize?: 'lg' | 'sm';
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: React.Ref<HTMLInputElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  sources?: Array<VideoSource>;
  transcription?: string;
  transcriptionLabel?: string;
  tracks?: Array<TrackSource>;

  poster?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  fluid?: boolean;

  showDisclaimer?: boolean;
  youtubeUrl?: string;
}

export const Video: FC<VideoProps> = (props) => {
  let vpInstance: VideoPlayer;

  useEffect(() => {
    const el = document.querySelector('video');
    if (el && VideoPlayer) {
      vpInstance = new VideoPlayer(el);
      // setTimeout(() => {
      //   console.log(vpInstance.player.log); // Con .player puoi usare play(), stop() ecc ..
      // }, 3000);
      if (props.youtubeUrl) {
        loadYouTubeVideo(props.youtubeUrl, vpInstance);
      }

      if (props.autoplay) {
        setTimeout(() => {
          vpInstance?.player?.play();
        }, 1000);
      }
    }
    return () => {
      if (vpInstance) {
        vpInstance.dispose();
      }
    };
  }, []);

  function loadYouTubeVideo(url: string, vpInstance: VideoPlayer) {
    if (vpInstance) {
      vpInstance.setYouTubeVideo(url);
    }
  }

  const { controls = true, autoplay = false, loop = false, fluid = true, poster = undefined } = props;
  const videoProps = { controls, autoplay, loop, fluid, poster };

  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className='row dimmable'>
        <video {...videoProps} preload='auto' className='video-js' data-bs-video={true}>
          {props.sources?.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
          {props.tracks?.map((track) => {
            const { src, kind, label, srcLang, isDefault } = track;
            return (
              <track
                key={src}
                kind={kind}
                src={src}
                srcLang={srcLang || ''}
                label={label}
                default={isDefault || false}
              />
            );
          })}
        </video>
        {props.transcription && (
          <Accordion className='vjs-transcription'>
            <AccordionItem>
              <AccordionHeader active={show} onToggle={() => setShow((p) => !p)}>
                {props.transcriptionLabel || 'Trascrizione'}
              </AccordionHeader>
              <AccordionBody active={show}>{props.transcription}</AccordionBody>
            </AccordionItem>
          </Accordion>
        )}
      </div>
      <Dimmer icon='it-unlocked'>
        <p>Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella cookie policy.</p>
        <DimmerButtons>
          <Button
            onClick={() => {
              console.log('click');
            }}
            color='primary'
          >
            Accetta
          </Button>
          <FormGroup check inline>
            <Input id='inline-checkbox' type='checkbox' />
            <Label check for='inline-checkbox' defaultChecked={false}>
              Ricorda per tutti i video
            </Label>
          </FormGroup>
        </DimmerButtons>
      </Dimmer>
    </>
  );
};
