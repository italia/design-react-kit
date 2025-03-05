import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Video } from '../../src';
import type { TrackSource } from '../../src/Video/Video';

const meta: Meta<typeof Video> = {
  title: 'Documentazione/Componenti/Video',
  component: Video,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Trascription: Story = {
  render: () => {
    const sources = [
      { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
    ];
    const transcription = 'Questa è la trascrizione testuale del video';
    return (
      <div>
        <div>Video</div>
        <Video
          sources={sources}
          transcriptionLabel={'Mostra la trascrizione del video'}
          transcription={transcription}
        />
        <p>In questo esempio viene passato del testo relativo alla trascrizione video</p>
      </div>
    );
  }
};

export const Tracks: Story = {
  render: () => {
    const tracks: TrackSource[] = [
      {
        src: 'https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-it.vtt',
        kind: 'subtitles',
        label: 'Italiano',
        srcLang: 'it',
        isDefault: true
      },
      {
        src: 'https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-en.vtt',
        kind: 'subtitles',
        label: 'English',
        srcLang: 'en',
        isDefault: false
      },
      {
        kind: 'captions',
        src: 'https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-es.vtt',
        srcLang: 'es',
        label: 'Español',
        isDefault: false
      }
    ];
    const sources = [
      {
        src: 'https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd',
        type: 'application/dash+xml'
      }
    ];

    const poster = 'https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDream.mp4-poster21.jpg';
    return (
      <div>
        <div>Video</div>
        <Video sources={sources} tracks={tracks} poster={poster} />
        <p>
          In questo esempio vengono passate diverse tracce per i sottotitoli: in italiano (predefinito) , inglese e
          spagnolo
        </p>
      </div>
    );
  }
};

export const AutoplayAndControls: Story = {
  render: () => {
    const sources = [
      { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
    ];

    return (
      <div>
        <div>Video</div>
        <Video sources={sources} autoplay={true} fluid={true} controls={true} loop={true} />
        <p>
          In questo esempio vengono impostati seguenti parametri:
          <ul>
            <li>autoplay: true</li>
            <li>fluid: true</li>
            <li>controls: true</li>
            <li>loop: true</li>
          </ul>
        </p>
      </div>
    );
  }
};

export const YouTubeVideo: Story = {
  render: () => {
    return (
      <div>
        <div>Video</div>
        <Video youtubeUrl={'https://youtu.be/_0j7ZQ67KtY'} />
        <p>In questo esempio viene passato nella prorietà 'youtubeUrl' un url di un video di YouTube</p>
      </div>
    );
  }
};

//https://youtu.be/_0j7ZQ67KtY

export const Esempi: Story = {
  render: () => {
    const sources = [
      { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
    ];

    return (
      <div>
        <div>Video</div>
        <Video sources={sources} />
        <p>
          In questo esempio vengono passati al compomente solamente la prorietà relativa all'array delle sorgenti,
          contente per ogni sorgente l'url della sorgente e sua tipologia
        </p>
      </div>
    );
  }
};
