import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Video } from '../../src';
import type { VideoTrackSource } from '../../src/Video/Video';

const meta: Meta<typeof Video> = {
  title: 'Documentazione/Componenti/Video',
  component: Video
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
      <Video
        id='video-trascription'
        sources={sources}
        transcriptionLabel={'Mostra la trascrizione del video'}
        transcription={transcription}
      />
    );
  }
};

export const Tracks: Story = {
  render: () => {
    const transcription = 'Questa è la trascrizione testuale del video';
    const tracks: VideoTrackSource[] = [
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
      <Video
        id='video-tracks'
        sources={sources}
        tracks={tracks}
        poster={poster}
        transcriptionLabel={'Mostra la trascrizione del video'}
        transcription={transcription}
      />
    );
  }
};

export const AutoplayAndControls: Story = {
  render: () => {
    const transcription = 'Questa è la trascrizione testuale del video';
    const sources = [
      { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
    ];

    return (
      <Video
        id='video-autoplay-controls'
        sources={sources}
        autoPlay={true}
        fluid={true}
        controls={true}
        loop={true}
        transcriptionLabel={'Mostra la trascrizione del video'}
        transcription={transcription}
      />
    );
  }
};

export const YouTubeVideo: Story = {
  render: () => {
    const transcription = 'Questa è la trascrizione testuale del video';
    const ytVideo = {
      url: 'https://youtu.be/_0j7ZQ67KtY',
      hasDisclaimer: true,
      disclaimerKey: 'youtube',
      disclaimerText: `Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella <a class="text-white" href='/privacy_policy'>cookie policy</a>`
    };
    return (
      <Video
        id='video-youtube'
        youtube={ytVideo}
        transcriptionLabel={'Mostra la trascrizione del video'}
        transcription={transcription}
      />
    );
  }
};

export const Base: Story = {
  render: () => {
    const transcription = 'Questa è la trascrizione testuale del video';
    const sources = [
      { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
    ];

    return (
      <Video
        id="video-simple"
        sources={sources}
        transcriptionLabel={'Mostra la trascrizione del video'}
        transcription={transcription}
      />
    );
  }
};
