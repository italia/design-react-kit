import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Upload, UploadList, UploadListItem } from '../../src';

const meta: Meta<typeof Upload> = {
  title: 'Documentazione/Form/Upload',
  component: Upload
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const EsempioInput: Story = {
  render: (args) => <Upload {...args} />,
  args: {
    id: 'ExampleUpload'
  }
};

export const ListaFiles = {
  render: ({ success, uploading, error }) => (
    <UploadList>
      <UploadListItem {...success}></UploadListItem>
      <UploadListItem {...uploading}></UploadListItem>
      <UploadListItem {...error}></UploadListItem>
    </UploadList>
  ),
  args: {
    success: {
      uploadStatus: 'success',
      fileName: 'nome-file-01.pdf',
      fileWeight: '10 MB'
    },
    uploading: {
      uploadStatus: 'uploading',
      fileName: 'nome-file-01.pdf',
      fileWeight: '20 MB'
    },
    error: {
      uploadStatus: 'error',
      fileName: 'nome-file-01.pdf',
      fileWeight: '30 MB'
    }
  }
};
