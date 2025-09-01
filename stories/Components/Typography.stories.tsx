import { Meta, StoryObj } from "@storybook/react-vite";
import React from 'react';

const meta: Meta = {
  title: "Documentazione/Organizzare i contenuti/Tipografia",
};

export default meta;

type Story = StoryObj;

export const Abbrevazioni: Story = {
  render: () => (
    <>
      <p>
        <abbr title='attribute'>attr</abbr>
      </p>
      <p>
        <abbr title='HyperText Markup Language' className='initialism'>
          HTML
        </abbr>
      </p>
    </>
  )
};

export const AllineamentoADestra: Story = {
  render: () => (
    <blockquote className='blockquote text-end'>
      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className='blockquote-footer'>
        Someone famous in <cite title='Source Title'>Source Title</cite>
      </footer>
    </blockquote>
  )
};

export const AllineamentoCentrato: Story = {
  render: () => (
    <blockquote className='blockquote text-center'>
      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className='blockquote-footer'>
        Someone famous in <cite title='Source Title'>Source Title</cite>
      </footer>
    </blockquote>
  )
};

export const Citazioni: Story = {
  render: () => (
    <blockquote className='blockquote'>
      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
  )
};

export const CitazioneFonte: Story = {
  render: () => (
    <blockquote className='blockquote'>
      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className='blockquote-footer'>
        Someone famous in <cite title='Source Title'>Source Title</cite>
      </footer>
    </blockquote>
  )
};

export const Dimensioni: Story = {
  render: () => (
    <table>
      <thead>
        <tr>
          <th>Intestazione</th>
          <th>Mobile</th>
          <th>Schermo &gt; 576px</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h1>h1</h1>
          </td>
          <td>Bold, 40px/48px</td>
          <td>Bold, 48px/60px</td>
        </tr>
        <tr>
          <td>
            <h2>h2</h2>
          </td>
          <td>Bold, 32px/40px</td>
          <td>Bold, 40px/48px</td>
        </tr>
        <tr>
          <td>
            <h3>h3</h3>
          </td>
          <td>Bold, 28px/32px</td>
          <td>Bold, 32px/40px</td>
        </tr>
        <tr>
          <td>
            <h4>h4</h4>
          </td>
          <td>SemiBold, 24px/28px</td>
          <td>SemiBold, 28px/40px</td>
        </tr>
        <tr>
          <td>
            <h5>h5</h5>
          </td>
          <td>Regular, 20px/24px</td>
          <td>Regular, 24px/40px</td>
        </tr>
        <tr>
          <td>
            <h6>h6</h6>
          </td>
          <td>SemiBold, 16px/24px</td>
          <td>SemiBold, 18px/28px</td>
        </tr>
      </tbody>
    </table>
  )
};

export const Intestazioni: Story = {
  render: () => (
    <>
      <h1>Intestazione di tipo h1</h1>
      <h2>Intestazione di tipo h2</h2>
      <h3>Intestazione di tipo h3</h3>
      <h4>Intestazione di tipo h4</h4>
      <h5>Intestazione di tipo h5</h5>
      <h6>Intestazione di tipo h6</h6>
    </>
  )
};

export const IntestazioneTipo: Story = { render: () => <h1 className='display-1'>Intestazione di tipo h1</h1> }

export const IntestazioneSecondario: Story = {
  render: () => (
    <h4>
      Intestazione <small className='text-muted'>con testo secondario</small>
    </h4>
  )
};

export const Link: Story = {
  render: () => (
    <>
      <p>
        Esempio di <a href='#'>link normale</a>.
      </p>
      <p>
        Esempio di&nbsp;
        <a href='#' className='text-decoration-none fw-bold'>
          link in grassetto senza sottolineatura
        </a>
        .
      </p>
    </>
  )
};

export const Liste: Story = {
  render: () => (
    <ul className='list-unstyled'>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>
        Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
  )
};

export const ListeAllineate: Story = {
  render: () => (
    <dl className='row'>
      <dt className='col-sm-3'>Description lists</dt>
      <dd className='col-sm-9'>A description list is perfect for defining terms.</dd>

      <dt className='col-sm-3'>Euismod</dt>
      <dd className='col-sm-9'>
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>

      <dt className='col-sm-3'>Malesuada porta</dt>
      <dd className='col-sm-9'>Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt className='col-sm-3 text-truncate'>Truncated term is truncated</dt>
      <dd className='col-sm-9'>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </dd>

      <dt className='col-sm-3'>Nesting</dt>
      <dd className='col-sm-9'>
        <dl className='row'>
          <dt className='col-sm-4'>Nested definition list</dt>
          <dd className='col-sm-8'>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
      </dd>
    </dl>
  )
};

export const ListeInline: Story = {
  render: () => (
    <ul className='list-inline'>
      <li className='list-inline-item'>Lorem ipsum</li>
      <li className='list-inline-item'>Phasellus iaculis</li>
      <li className='list-inline-item'>Nulla volutpat</li>
    </ul>
  )
};

export const Lora: Story = {
  render: () => (
    <>
      <p className='text-serif'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className='text-serif'>abcdefghijklmnopqrstuvwxyz</p>
      <p className='text-serif'>0123456789</p>
    </>
  )
};

export const Paragrafo: Story = {
  render: () => (
    <>
      <p>
        Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna.
        Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars
        studiorum, prodita quaerimus.
      </p>
      <p>
        Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna.
        Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars
        studiorum, prodita quaerimus.
      </p>
    </>
  )
};

export const ParagrafoEvidenza: Story = { render: () => <p className='lead'>Paragrafo in evidenza</p> }

export const ParagrafiPersonalizzati: Story = {
  render: () => (
    <>
      <p>
        Esempio di testo <u>sottolineato</u>.
      </p>
      <p>
        Esempio di testo <mark>evidenziato</mark>.
      </p>
      <p>
        Esempio di testo <em>corsivo</em>.
      </p>
      <p>
        Esempio di testo <strong>in grassetto</strong>.
      </p>
      <p>
        Esempio di testo <small>rimpicciolito</small>.
      </p>
      <p>
        Esempio di testo <ins>aggiuntivo</ins>.
      </p>
      <p>
        Esempio di testo <del>cancellato</del> o <s>invalido</s>.
      </p>
      <p>
        Esempio di testo <code>monospace</code>.
      </p>
    </>
  )
};

export const RobotoMono: Story = {
  render: () => (
    <>
      <p className='font-monospace'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className='font-monospace'>abcdefghijklmnopqrstuvwxyz</p>
      <p className='font-monospace'>0123456789</p>
    </>
  )
};

export const Titillium: Story = {
  render: () => (
    <>
      <p className='text-sans-serif'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className='text-sans-serif'>abcdefghijklmnopqrstuvwxyz</p>
      <p className='text-sans-serif'>0123456789</p>
    </>
  )
};
