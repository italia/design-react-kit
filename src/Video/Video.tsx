import React, { FC, useEffect, useRef } from 'react';

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
import { Icon } from '../Icon/Icon';

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
  id: string;
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
  acceptLabel?: string;
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
  }, [instance]);

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
