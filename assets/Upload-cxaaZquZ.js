import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta, C as Canvas } from "./index-D3W_KmJT.js";
import "./track-focus-DbJ2CO43.js";
import { U as UploadStories, L as ListaFiles, a as ListaFilesImmagine, b as UploadAvatar, G as Gallery, D as DragNdrop } from "./Upload.stories-DXEOaAYb.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DF2Pyat-.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Container-CQqTH9-0.js";
import "./utils-Cn8VSNph.js";
import "./index-xoeSAV6i.js";
import "./Col-DbKMWTUR.js";
import "./Icon-DiIdFz3Z.js";
import "./Progress-BIRFZiVh.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: UploadStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "upload",
      children: "Upload"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-dei-form-dedicati-al-caricamento-file",
      children: "Elementi dei form dedicati al caricamento file."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Fra i tipi di campo disponibili per la compilazione dei form HTML è disponibile anche il tipo file. Questi campi di input consentono l’upload di uno o più file attraverso l’invio del form."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questa pagina vengono presentate varianti grafiche e funzionali per questo tipo di input."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "upload-con-lista-di-file",
      children: "Upload con lista di file"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Ogni elemento può avere tre differenti stati:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "loading per i file in caricamento"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "success per i file caricati correttamente"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "error in caso di errori"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaFiles
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-anteprima-delle-immagini",
      children: "Con anteprima delle immagini"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Alle icone SVG rappresentative dei file si sostituiscono le thumbnail delle immagini caricate."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente ottimizza la visualizzazione delle immagini anche quando queste non hanno proporzione quadrata, si consiglia comunque di utilizzare immagini dal peso contenuto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaFilesImmagine
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "upload-con-avatar",
      children: "Upload con Avatar"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Questo elemento combina la visualizzazione dell’immagine Avatar con l’input tipo file per permettere l’upload di una nuova immagine."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L’Avatar contenuto ha la classe specifica .avatar-upload ed è sempre di tipo .size-xxl."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È possibile utilizzare due dimensioni: quella piccola si ottiene aggiungendo lo stato ", jsxRuntimeExports.jsx(_components.code, {
        children: "avatarSmall"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'Ci si aspetta venga caricato un solo file (immagine) il form non ha quindi l’attributo multiple="multiple".'
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L’elemento ha design e comportamento differenti in versione mobile si consiglia quindi di ridurre le dimensioni della finestra del browser per testare questa versione."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: UploadAvatar
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "upload-gallery",
      children: "Upload Gallery"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per gestire il caricamento di una serie di foto e l’anteprima delle stesse in forma di Gallery con thumbnail, bisogna definire ", jsxRuntimeExports.jsx(_components.code, {
        children: "tipologia='gallery'"
      }), " nel componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "UploadList"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Anche in questo caso, nonostante il componente ottimizzi la visualizzazione delle immagini quando queste non hanno proporzione quadrata, si consiglia comunque di utilizzare immagini dal peso contenuto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Gallery
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "upload-dragdrop",
      children: "Upload Drag&drop"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Questa versione dell’upload permette all’utente di trascinare sull’icona che la caratterizza un file dal proprio dispositivo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DragNdrop
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [files, setFiles] = useState<File[]>([]);\r\nreturn (\r\n  <div className='section'>\r\n    <UploadDragNdrop files={files} setFiles={setFiles} />\r\n  </div>\r\n);\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
