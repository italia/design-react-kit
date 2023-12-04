import React from 'react';
import { Table } from '../../src';

export const TableBase = () => (
  <Table>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableDark = () => (
  <Table dark>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableThead = () => (
  <>
    <Table>
      <thead className='table-dark'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nome</th>
          <th scope='col'>Cognome</th>
          <th scope='col'>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mario</td>
          <td>Verdi</td>
          <td>mario.verdi</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
      </tbody>
    </Table>

    <Table>
      <thead className='table-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nome</th>
          <th scope='col'>Cognome</th>
          <th scope='col'>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mario</td>
          <td>Verdi</td>
          <td>mario.verdi</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
      </tbody>
    </Table>
  </>
);

export const TableStriped = () => (
  <Table striped>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableBordered = () => (
  <Table bordered>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableBorderless = () => (
  <Table borderless>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableHover = () => (
  <Table hover>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableCompact = () => (
  <Table size='sm'>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>
);

export const TableContextual = () => (
  <>
    {/* On rows */}
    <Table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr className='table-active'>
          <th>Active</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th>Default</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-primary'>
          <th>Primary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-secondary'>
          <th>Secondary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-success'>
          <th>Success</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-danger'>
          <th>Danger</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-warning'>
          <th>Warning</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </Table>

    {/* On cells (`td` or `th`) */}
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Class</td>
          <td className='table-active'>Active</td>
          <td className='table-primary'>Primary</td>
          <td className='table-secondary'>Secondary</td>
          <td className='table-success'>Success</td>
          <td className='table-danger'>Danger</td>
          <td className='table-warning'>Warning</td>
        </tr>
      </tbody>
    </Table>
  </>
);

export const TableCaptions = () => (
  <Table>
    <caption>Lista di utenti</caption>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>First</th>
        <th scope='col'>Last</th>
        <th scope='col'>Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);

export const TableResponsive = () => (
  <Table responsive>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
    </tbody>
  </Table>
);

export const TableBreakpoint = () => (
  <>
    <Table responsive size='sm'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>

    <Table responsive size='md'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>

    <Table responsive size='lg'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>

    <Table responsive size='xl'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>
  </>
);

export default {
  title: 'Componenti/Tables'
};
