import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Upload, UploadList, UploadListItem } from '../../src';
import { UploadListItemProps } from '../../src/Upload/UploadListItem';

const meta: Meta<typeof Upload> = {
  title: 'Documentazione/Form/Upload',
  component: Upload
};

export default meta;

type Story = StoryObj<typeof Upload>;

interface listaFilesArgsI {
  [type: string]: UploadListItemProps
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
    fileName: 'nome-file-03.pdf',
  }
};

export const ListaFiles = {
  render: ({ ...listaFilesArgs }: listaFilesArgsI) => (
    <UploadList>
      {Object.values(listaFilesArgs).map(type => {
        return <UploadListItem key={type.fileName} {...type} />
      })}
    </UploadList>
  ),
  args: {
    ...listaFilesArgs
  }
};
