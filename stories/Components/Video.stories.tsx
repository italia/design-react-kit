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
      <div className='bg-secondary container'>
        <Video
          sources={sources}
          transcriptionLabel={'Mostra la trascrizione del video'}
          transcription={transcription}
        />
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
      <Video sources={sources} tracks={tracks} poster={poster} />
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
      <Video sources={sources} autoPlay={true} fluid={true} controls={true} loop={true} />
    );
  }
};

export const YouTubeVideo: Story = {
  render: () => {
    const ytVideo = {
      url: 'https://youtu.be/_0j7ZQ67KtY',
      hasDisclaimer: true,
      disclaimerKey: 'youtube',
      disclaimerText: `Vai alla pagina privacy <a href='/privacy_policy'>policy</a>`
    };
    return (
      <Video youtube={ytVideo} />
    );
  }
};

export const Esempi: Story = {
  render: () => {
    const sources = [
      { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
    ];

    return (
      <Video sources={sources} />
    );
  }
};
