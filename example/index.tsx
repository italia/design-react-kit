import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import Homepage from './homepage';

const App = () => {
  return (
    <div>
      <Homepage
        townName='Comune di Bugliano'
        townTagLine=''
        theme='default'
        logo={
          'https://comunedibuglianohome.files.wordpress.com/2020/05/cropped-stemma-comune-2.jpg?w=200'
        }
      />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
