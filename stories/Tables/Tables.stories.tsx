import React from 'react';

export const TableBase = () => (
  <table className='table'>
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
  </table>
);

export const TableDark = () => (
  <table className='table table-dark'>
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
  </table>
);

export const TableThead = () => (
  <>
    <table className='table'>
      <thead className='thead-dark'>
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
    </table>

    <table className='table'>
      <thead className='thead-light'>
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
    </table>
  </>
);

export const TableStriped = () => (
  <table className='table table-striped'>
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
  </table>
);

export const TableBordered = () => (
  <table className='table table-bordered'>
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
  </table>
);

export const TableBorderless = () => (
  <table className='table table-borderless'>
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
  </table>
);

export const TableHover = () => (
  <table className='table table-hover'>
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
  </table>
);

export const TableCompact = () => (
  <table className='table table-sm'>
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
  </table>
);

export const TableContextual = () => (
  <>
    {/* On rows */}
    <table className='table'>
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
    </table>

    {/* On cells (`td` or `th`) */}
    <table className='table'>
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
    </table>
  </>
);

export const TableCaptions = () => (
  <table className='table'>
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
  </table>
);

export const TableResponsive = () => (
  <div className='table-responsive'>
    <table className='table'>
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
    </table>
  </div>
);

export const TableBreakpoint = () => (
  <>
    <div className='table-responsive-sm'>
      <table className='table'>
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
      </table>
    </div>

    <div className='table-responsive-md'>
      <table className='table'>
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
      </table>
    </div>

    <div className='table-responsive-lg'>
      <table className='table'>
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
      </table>
    </div>

    <div className='table-responsive-xl'>
      <table className='table'>
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
      </table>
    </div>
  </>
);

export default {
  title: 'Componenti/Tables'
};
