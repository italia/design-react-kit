import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Container, Row, Upload, UploadList, UploadListItem } from '../../src';
import { UploadListItemProps } from '../../src/Upload/UploadListItem';

const meta: Meta<typeof Upload> = {
  title: 'Documentazione/Form/Upload',
  component: Upload
};

export default meta;

type Story = StoryObj<typeof Upload>;

interface listaFilesArgsI {
  [type: string]: UploadListItemProps;
}

export const EsempioInput: Story = {
  render: (args) => <Upload {...args} />,
  args: {
    id: 'ExampleUpload'
  }
};

const listaFilesArgs: listaFilesArgsI = {
  success: {
    uploadStatus: 'success',
    fileName: 'nome-file-01.pdf',
    fileWeight: '10 MB'
  },
  successLong: {
    uploadStatus: 'success',
    fileName: 'nome-file-02-nome-file-lungo-per-ellissi.doc',
    fileWeight: '10 MB'
  },
  uploading: {
    uploadStatus: 'uploading',
    fileName: 'nome-file-02.pdf',
    progressValue: 30
  },
  error: {
    uploadStatus: 'error',
    fileName: 'nome-file-03.pdf'
  }
};

export const ListaFiles = {
  render: ({ ...listaFilesArgs }: listaFilesArgsI) => (
    <UploadList>
      {Object.values(listaFilesArgs).map((type) => {
        return <UploadListItem key={type.fileName} {...type} />;
      })}
    </UploadList>
  ),
  args: {
    ...listaFilesArgs
  }
};

const listaFilesImmagineArgs: listaFilesArgsI = {
  success: {
    previewImage: true,
    previewImageSrc: 'https://picsum.photos/40/40?image=1055',
    previewImageAlt: 'descrizione immagine',
    uploadStatus: 'success',
    fileName: 'nome-file-01.pdf',
    fileWeight: '10 MB'
  },
  successLong: {
    previewImage: true,
    previewImageSrc: 'https://picsum.photos/40/40?image=1056',
    previewImageAlt: 'descrizione immagine',
    uploadStatus: 'success',
    fileName: 'nome-file-02-nome-file-lungo-per-ellissi.doc',
    fileWeight: '10 MB'
  },
  uploading: {
    previewImage: true,
    previewImageSrc: 'https://picsum.photos/40/40?image=1057',
    previewImageAlt: 'descrizione immagine',
    uploadStatus: 'uploading',
    fileName: 'nome-file-02.pdf',
    progressValue: 30
  },
  error: {
    previewImage: true,
    previewImageSrc: 'https://picsum.photos/40/40?image=1058',
    previewImageAlt: 'descrizione immagine',
    uploadStatus: 'error',
    fileName: 'nome-file-03.pdf'
  }
};

export const ListaFilesImmagine = {
  render: ({ ...listaFilesImmagineArgs }: listaFilesArgsI) => (
    <UploadList previewImage>
      {Object.values(listaFilesImmagineArgs).map((type) => {
        return <UploadListItem key={type.fileName} {...type} />;
      })}
    </UploadList>
  ),
  args: {
    ...listaFilesImmagineArgs
  }
};

export const UploadAvatar: Story = {
  render: (args) => (
    <Container>
      <Row>
        <Col>
          <Upload
            {...args}
            id='ExampleUpload3'
            avatarImg={<img src='https://randomuser.me/api/portraits/men/21.jpg' alt='descrizione immagine' />}
          />
        </Col>
        <Col>
          <Upload
            {...args}
            id='ExampleUpload4'
            avatarImg={<img src='https://randomuser.me/api/portraits/women/21.jpg' alt='descrizione immagine' />}
            avatarSmall
          />
        </Col>
      </Row>
    </Container>
  ),
  args: {
    label: 'Aggiorna',
    icon: 'it-camera',
    isAvatar: true
  }
};
