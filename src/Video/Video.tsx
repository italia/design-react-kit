import React, { FC, useEffect } from 'react';

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

export interface YouTubeVideo {
  url: string;
  hasDisclaimer?: boolean;
  disclaimerText?: string;
  disclaimerKey?: string;
}
export interface VideoProps extends InputProps {
  innerRef?: React.Ref<HTMLInputElement>;
  cssModule?: CSSModule;
  sources?: Array<VideoSource>;
  transcription?: string;
  transcriptionLabel?: string;
  tracks?: Array<TrackSource>;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  fluid?: boolean;
  youtube?: YouTubeVideo;
}

export const Video: FC<VideoProps> = (props) => {
  let vpInstance: VideoPlayer;
  const [showTranscript, setShowTranscript] = React.useState(false);
  const [showDisclaimer, setShowDisclaimer] = React.useState(false);
  const [rememberFlag, setRememberFlag] = React.useState(false);
  const [disclaimerText, setDisclaimerText] = React.useState(
    `Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella cookie policy.`
  );

  useEffect(() => {
    const el = document.querySelector('video');
    if (el && VideoPlayer) {
      vpInstance = new VideoPlayer(el);
      // setTimeout(() => {
      //   console.log(vpInstance.player.log); // Con .player puoi usare play(), stop() ecc ..
      // }, 3000);
      if (props.youtube?.url) {
        loadYouTubeVideo(props.youtube.url, vpInstance);
        if (props.youtube.hasDisclaimer) {
          const serviceName = props.youtube.disclaimerKey || 'youtube';
          const rememberFlag = localStorage.getItem(serviceName);
          if (props.youtube.disclaimerText) {
            setDisclaimerText(props.youtube.disclaimerText);
          }
          setRememberFlag(rememberFlag == 'true');
          if (rememberFlag == 'true') {
            setShowDisclaimer(false);
          } else {
            setShowDisclaimer(true);
          }
        }
      }

      if (props.autoPlay) {
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

  useEffect(() => {
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
      }
    }
  }, [rememberFlag]);

  function loadYouTubeVideo(url: string, vpInstance: VideoPlayer) {
    if (vpInstance) {
      vpInstance.setYouTubeVideo(url);
    }
  }

  const { controls = true, autoPlay = false, loop = false, fluid = true, poster = undefined } = props;
  const videoProps = { controls, autoPlay, loop, fluid, poster };

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
              <AccordionHeader active={showTranscript} onToggle={() => setShowTranscript((p) => !p)}>
                {props.transcriptionLabel || 'Trascrizione'}
              </AccordionHeader>
              <AccordionBody active={showTranscript}>{props.transcription}</AccordionBody>
            </AccordionItem>
          </Accordion>
        )}
      </div>
      <Dimmer icon='it-video' show={showDisclaimer} color='primary'>
        <p dangerouslySetInnerHTML={{ __html: disclaimerText }}></p>
        <DimmerButtons className='bg-primary'>
          <Button
            onClick={() => {
              console.log('click');
              setShowDisclaimer(false);
            }}
            color='primary'
          >
            Accetta
          </Button>
          <div className='d-flex align-items-center ml-2'>
            <FormGroup check inline>
              <Input
                id='inline-checkbox'
                type='checkbox'
                checked={rememberFlag}
                onChange={() => setRememberFlag((p) => !p)}
              />
              <Label check for='inline-checkbox' defaultChecked={false} className='text-white'>
                Ricorda per tutti i video
              </Label>
            </FormGroup>
          </div>
        </DimmerButtons>
      </Dimmer>
    </>
  );
};
