import React, { FC, useEffect, useRef } from 'react';

import { VideoPlayer } from 'bootstrap-italia';
import { Input } from '../Input/Input';
import { Accordion } from '../Accordion/Accordion';
import { AccordionItem } from '../Accordion/AccordionItem';
import { AccordionHeader } from '../Accordion/AccordionHeader';
import { AccordionBody } from '../Accordion/AccordionBody';
import { Dimmer } from '../Dimmer/Dimmer';
import { DimmerButtons } from '../Dimmer/DimmerButtons';
import { Button } from '../Button/Button';
import { FormGroup, Label } from 'reactstrap';
import { Icon } from '../Icon/Icon';

export interface VideoSource {
  /** Sorgente del video */
  src: string;
  /** Tipo della sorgente video */
  type: string;
}
export interface VideoTrackSource {
  /** Tipologia di traccia audio */
  kind: string;
  /** Sorgente della traccia audio */
  src: string;
  /** Lingua della traccia audio */
  srcLang: string;
  /** Label della traccia audio */
  label: string;
  /** Setta la traccia audio come default */
  isDefault?: boolean;
}

export interface VideoYouTube {
  /** Url del video YouTube */
  url: string;
  /** Attiva o meno il disclaimer */
  hasDisclaimer?: boolean;
  /** Testo del disclaimer */
  disclaimerText?: string;
  /** Chiave del disclaimer come preferenza */
  disclaimerKey?: string;
}
export interface VideoProps {
  /** Id del componente Video */
  id: string;
  /** Sorgenti del video */
  sources?: Array<VideoSource>;
  /** Testo della trascrizione */
  transcription?: string;
  /** Label dell'accordion della trascrizione */
  transcriptionLabel?: string;
  /** Array delle tracce */
  tracks?: Array<VideoTrackSource>;
  /** Url del poster */
  poster?: string;
  /** Attiva o meno i controlli */
  controls?: boolean;
  /** Attiva o meno l'autoplay */
  autoPlay?: boolean;
  /** Attiva o meno il loop del video */
  loop?: boolean;
  /** Modalità visualizzazione fluida */
  fluid?: boolean;
  /** Video YouTube */
  youtube?: VideoYouTube;
  /** Label del pulsante di accettazione */
  acceptLabel?: string;
  /** Label della checkbox per ricordare la scelta di accettazione */
  rememberLabel?: string;
}

export const Video: FC<VideoProps> = (props) => {
  const [showTranscript, setShowTranscript] = React.useState(false);
  const [showDisclaimer, setShowDisclaimer] = React.useState(false);
  const [instance, setInstance] = React.useState<VideoPlayer>();
  const [rememberFlag, setRememberFlag] = React.useState(false);
  const [disclaimerText, setDisclaimerText] = React.useState(
    `Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella cookie policy.`
  );
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && VideoPlayer && !instance) {
      setInstance(new VideoPlayer(el))
    }
    if (props.youtube?.url) {
      if (props.youtube.hasDisclaimer) {
        const serviceName = props.youtube.disclaimerKey || 'youtube';
        const rememberFlag = localStorage.getItem(serviceName);
        if (props.youtube.disclaimerText) {
          setDisclaimerText(props.youtube.disclaimerText);
        }
        setRememberFlag(rememberFlag == 'true');
        if (rememberFlag == 'true') {
          setShowDisclaimer(false);
          loadYouTubeVideo(props.youtube.url);
        } else {
          setShowDisclaimer(true);
        }
      }
    }

    if (props.autoPlay) {
      setTimeout(() => {
        instance?.player?.play();
      }, 1000);
    }

    return () => {
      if (instance) {
        instance.dispose();
      }
    };
  }, []);

  const loadYouTubeVideo = (url: string) => {
    if (instance) {
      instance.setYouTubeVideo(url);
    }
  }

  const { controls = true, autoPlay = false, loop = false, fluid = true, poster = undefined } = props;
  const videoProps = { controls, autoPlay, loop, fluid, poster };

  return (
    <>
      <div className='row dimmable'>
        <video {...videoProps} ref={ref} preload='auto' className='video-js' data-bs-video={true}>
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
              <AccordionHeader active={showTranscript} onToggle={() => setShowTranscript((p) => !p)}>
                {props.transcriptionLabel || 'Trascrizione'}
              </AccordionHeader>
              <AccordionBody active={showTranscript}>{props.transcription}</AccordionBody>
            </AccordionItem>
          </Accordion>
        )}
        <Dimmer
          show={showDisclaimer}
          className='acceptoverlay-inner'
          wrapperClassName='acceptoverlay acceptoverlay-primary '
        >
          <div className='acceptoverlay-icon'>
            <Icon icon='it-video' size='xl' className=''></Icon>
          </div>
          <p dangerouslySetInnerHTML={{ __html: disclaimerText }}></p>
          <DimmerButtons className='bg-primary'>
            <Button
              onClick={() => {
                if (props.youtube?.url) {
                  if (props.youtube.hasDisclaimer) {
                    const serviceName = props.youtube.disclaimerKey || 'youtube';
                    if (rememberFlag) {
                      // set cookie
                      localStorage.setItem(serviceName, 'true');
                    } else {
                      // reset cookie
                      localStorage.removeItem(serviceName);
                    }
                    loadYouTubeVideo(props.youtube.url);
                  }
                  setShowDisclaimer(false);
                }
              }}
              color='primary'
            >
              {props.acceptLabel || 'Accetta'}
            </Button>
            <div className='d-flex align-items-center ml-2'>
              <FormGroup check inline>
                <Input
                  id={`inline-checkbox_${props.id}`}
                  type='checkbox'
                  checked={rememberFlag}
                  onChange={() => setRememberFlag((p) => !p)}
                />
                <Label check for={`inline-checkbox_${props.id}`} defaultChecked={false} className='text-white'>
                  {props.rememberLabel || 'Ricorda per tutti i video'}
                </Label>
              </FormGroup>
            </div>
          </DimmerButtons>
        </Dimmer>
      </div>
    </>
  );
};
