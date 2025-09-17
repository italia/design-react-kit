var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { e, r as reactExports } from "./iframe-WcRkBu1E.js";
import { C as Container } from "./Container-C1UL6kzl.js";
import { R as Row, C as Col } from "./Col-BqJJlB9Y.js";
import { c as classNames } from "./index-_NcwzH_h.js";
import { I as Icon } from "./Icon-kqgzPNr6.js";
import { P as Progress } from "./Progress-BYr8hbJQ.js";
import "./track-focus-DbJ2CO43.js";
const Upload = ({
  id,
  className,
  icon = "it-upload",
  iconSize,
  label = "Upload",
  tag = "input",
  isAvatar,
  avatarImg,
  avatarSmall,
  testId,
  ...attributes
}) => {
  const Tag = tag, classes = classNames(
    className,
    {
      upload: isAvatar ? false : true
    },
    { "upload-avatar": isAvatar }
  ), classesAvatarWrapper = classNames({
    "avatar-upload-wrapper": true,
    "size-sm": avatarSmall
  }), extraAttributes = {
    id,
    type: "file"
  };
  const infoId = id ? `${id}Description` : void 0;
  if (id) {
    extraAttributes["aria-describedby"] = infoId;
  }
  if (isAvatar) {
    return /* @__PURE__ */ e.createElement("div", { className: classesAvatarWrapper }, /* @__PURE__ */ e.createElement("div", { className: "avatar size-xxl avatar-upload" }, avatarImg, /* @__PURE__ */ e.createElement("div", { className: "upload-avatar-container" }, /* @__PURE__ */ e.createElement(Tag, { ...attributes, ...extraAttributes, className: classes, "data-testid": testId }), /* @__PURE__ */ e.createElement("label", { htmlFor: id }, /* @__PURE__ */ e.createElement(Icon, { icon, size: iconSize }), /* @__PURE__ */ e.createElement("span", null, label)))), /* @__PURE__ */ e.createElement("div", { className: "avatar-upload-icon" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-camera", size: "sm" })));
  }
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Tag, { ...attributes, ...extraAttributes, className: classes, "data-testid": testId }), /* @__PURE__ */ e.createElement("label", { htmlFor: id }, /* @__PURE__ */ e.createElement(Icon, { icon, size: iconSize }), /* @__PURE__ */ e.createElement("span", null, label)));
};
Upload.__docgenInfo = { "description": "", "methods": [], "displayName": "Upload", "props": { "id": { "required": true, "tsType": { "name": "string" }, "description": "L'id che lega il componente con la label" }, "label": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del per il componente Upload, default 'Upload'", "defaultValue": { "value": "'Upload'", "computed": false } }, "icon": { "required": false, "tsType": { "name": "string" }, "description": `Il nome dell'icona da mostrare, default è 'it-upload'. Per una lista completa vedi:
<a href="https://italia.github.io/design-react-kit/?path=/story/componenti-icon--lista-icone" target="_blank">Lista icone</a>
In caso di un'immagine esterna l'URL da utilizzare.`, "defaultValue": { "value": "'it-upload'", "computed": false } }, "iconSize": { "required": false, "tsType": { "name": "IconProps['size']", "raw": "IconProps['size']" }, "description": "" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati. Il valore di default è 'input'", "defaultValue": { "value": "'input'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Upload" }, "isAvatar": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che l'input è con un avatar" }, "avatarImg": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" }, "avatarSmall": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che l'avatar è piccolo" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["InputHTMLAttributes"] };
const DragandDropIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='180px'%20height='180px'%20viewBox='0%200%20180%20180'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2052.4%20(67378)%20-%20http://www.bohemiancoding.com/sketch%20--%3e%3ctitle%3eicon%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='Upload'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Artboard'%3e%3cg%20id='icon'%3e%3crect%20id='Rectangle'%20fill='%23D1E7FF'%20x='-4.54747351e-13'%20y='0'%20width='180'%20height='180'%3e%3c/rect%3e%3cg%20id='Group-6-Copy'%20transform='translate(107.855175,%20109.702248)%20rotate(-10.000000)%20translate(-107.855175,%20-109.702248)%20translate(48.355175,%2035.202248)'%3e%3cpath%20d='M9.09485765,0.818376999%20L89.0909206,0.818376999%20L118.590921,30.418377%20L118.590921,140.31444%20C118.590921,145.011035%20114.783578,148.818377%20110.086984,148.818377%20L6.26021198,148.818377%20C3.12914883,148.818377%200.590920643,146.280149%200.590920643,143.149086%20L0.590920643,9.32231401%20C0.590920643,4.62571928%204.39826293,0.818376999%209.09485765,0.818376999%20Z'%20id='Rectangle-3'%20fill='%2366A5E3'%20opacity='0.4'%3e%3c/path%3e%3cpolygon%20id='Line-3'%20fill='%23FFFFFF'%20fill-rule='nonzero'%20points='21.0573959%2073.8584959%2021.0573959%2065.3545589%2070.8630412%2065.3545589%2070.8630412%2073.8584959'%3e%3c/polygon%3e%3cpolygon%20id='Line-3-Copy'%20fill='%23FFFFFF'%20fill-rule='nonzero'%20points='20.2171934%2091.322159%2020.2171934%2082.818222%2099.7211304%2082.818222%2099.7211304%2091.322159'%3e%3c/polygon%3e%3cpolygon%20id='Line-3-Copy-2'%20fill='%23FFFFFF'%20fill-rule='nonzero'%20points='20.3932458%20107.600028%2020.3932458%2099.0960906%2099.8971828%2099.0960906%2099.8971828%20107.600028'%3e%3c/polygon%3e%3cpolygon%20id='Rectangle-7'%20fill='%230059B3'%20opacity='0.2'%20transform='translate(105.449361,%2040.610535)%20scale(-1,%201)%20rotate(90.000000)%20translate(-105.449361,%20-40.610535)%20'%20points='92.3040422%2027.4750409%20118.594681%2053.7460296%2095.2464052%2053.7377589'%3e%3c/polygon%3e%3cpath%20d='M89.0927528,0.842666647%20L118.560625,30.3915947%20L100.247733,30.6719146%20C94.1805894,30.7647859%2089.186911,25.9216815%2089.0940397,19.8545382%20C89.0931818,19.7984895%2089.0927528,19.7424351%2089.0927528,19.6863799%20L89.0927528,0.842666647%20Z'%20id='Rectangle-7'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const UploadDragNdrop = ({ files, setFiles }) => {
  const [dragOverClass, setDragOverClass] = reactExports.useState(false), dragOverClasses = classNames("upload-dragdrop", {
    dragover: dragOverClass,
    success: files.length > 0
  });
  const handleDrop = (event) => {
    handleDrag(event);
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFiles(Array.from(droppedFiles));
    }
    setDragOverClass(false);
  }, handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }, handleDragOver = (event) => {
    handleDrag(event);
    setDragOverClass(true);
  }, handleDragLeave = (event) => {
    handleDrag(event);
    setDragOverClass(false);
  };
  const byteConverter = (bytes) => {
    const K_UNIT = 1024;
    const SIZES = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    if (bytes == 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(K_UNIT)), resp = parseFloat((bytes / Math.pow(K_UNIT, i)).toFixed(2)) + " " + SIZES[i];
    return resp;
  };
  return /* @__PURE__ */ e.createElement("div", { className: dragOverClasses }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "upload-dragdrop-image",
      onDrop: handleDrop,
      onDrag: handleDrag,
      onDragStart: handleDrag,
      onDragEnd: handleDrag,
      onDragExit: handleDrag,
      onDragOver: handleDragOver,
      onDragEnter: handleDrag,
      onDragLeave: handleDragLeave
    },
    /* @__PURE__ */ e.createElement("img", { src: DragandDropIcon, alt: "descrizione immagine", "aria-hidden": "true" }),
    files.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "upload-dragdrop-success" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-check", size: "xs" }))
  ), /* @__PURE__ */ e.createElement("div", { className: "upload-dragdrop-text" }, files.length > 0 && /* @__PURE__ */ e.createElement("p", { className: "upload-dragdrop-weight" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-file", size: "xs" }), files.map((file) => file.type + " " + byteConverter(file.size))), files.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h5", null, files.map((file) => file.name)), /* @__PURE__ */ e.createElement("p", null, "Caricamento completato")) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h5", null, "Trascina il file per caricarlo"), /* @__PURE__ */ e.createElement("p", null, "oppure ", /* @__PURE__ */ e.createElement("input", { type: "file", name: "upload7", id: "upload7", className: "upload-dragdrop-input" }), /* @__PURE__ */ e.createElement("label", { htmlFor: "upload7" }, "selezionalo dal dispositivo")))));
};
UploadDragNdrop.__docgenInfo = { "description": "", "methods": [], "displayName": "UploadDragNdrop", "props": { "files": { "required": true, "tsType": { "name": "Array", "elements": [{ "name": "File" }], "raw": "File[]" }, "description": "Array di file per il caricamento del file" }, "setFiles": { "required": true, "tsType": { "name": "ReactDispatch", "raw": "React.Dispatch<React.SetStateAction<File[]>>", "elements": [{ "name": "ReactSetStateAction", "raw": "React.SetStateAction<File[]>", "elements": [{ "name": "Array", "elements": [{ "name": "File" }], "raw": "File[]" }] }] }, "description": "Funzione per impostare lo stato dei files" } } };
const UploadContext = reactExports.createContext({
  tipologia: "file"
});
const useUploadContext = () => {
  const { tipologia } = reactExports.useContext(UploadContext);
  return tipologia;
};
const UploadList = ({ className, previewImage, tipologia = "file", ...attributes }) => {
  const classes = classNames(
    { "upload-file-list": tipologia == "file" },
    { "upload-pictures-wall": tipologia == "gallery" },
    { "upload-file-list-image": previewImage },
    className
  );
  return /* @__PURE__ */ e.createElement(UploadContext.Provider, { value: { tipologia } }, /* @__PURE__ */ e.createElement("ul", { ...attributes, className: classes }));
};
UploadList.__docgenInfo = { "description": "", "methods": [], "displayName": "UploadList", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente lista del UploadList" }, "previewImage": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che gli item list hanno l'immagine come anteprima" }, "tipologia": { "required": false, "tsType": { "name": "union", "raw": "'file' | 'gallery'", "elements": [{ "name": "literal", "value": "'file'" }, { "name": "literal", "value": "'gallery'" }] }, "description": "Indica la tipologia di lista\n@default file", "defaultValue": { "value": "'file'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const UploadListItem = ({
  className,
  icon = "it-file",
  uploadStatus = "success",
  buttonTag = "button",
  progressValue,
  previewImage,
  previewImageSrc,
  previewImageAlt,
  fileName,
  fileWeight,
  children
}) => {
  const tipologia = useUploadContext(), classes = classNames(
    {
      "upload-file": tipologia === "file",
      success: uploadStatus === "success" && tipologia === "file",
      uploading: uploadStatus === "uploading" && tipologia === "file",
      error: uploadStatus === "error" && tipologia === "file"
    },
    className
  ), classesProgress = classNames({ "progress-image": previewImage }), ButtonTag = buttonTag;
  const elementiListItem = {
    success: {
      testoVHFile: "File caricato:",
      testoVHRightIcon: "Caricamento ultimato",
      rightIcon: "it-check"
    },
    uploading: {
      testoVHFile: "File caricato:",
      testoVHRightIcon: "Annulla caricamento",
      rightIcon: "it-close"
    },
    error: {
      testoVHFile: "Errore caricamento file:",
      testoVHRightIcon: "Elimina file caricato",
      rightIcon: "it-close"
    }
  };
  return /* @__PURE__ */ e.createElement("li", { className: classes }, children, previewImage ? /* @__PURE__ */ e.createElement("div", { className: "upload-image" }, /* @__PURE__ */ e.createElement("img", { src: previewImageSrc, alt: previewImageAlt })) : tipologia === "file" && /* @__PURE__ */ e.createElement(Icon, { icon, size: "sm" }), tipologia === "file" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, elementiListItem[uploadStatus].testoVHFile), fileName, " ", uploadStatus === "success" && /* @__PURE__ */ e.createElement("span", { className: "upload-file-weight" }, fileWeight)), /* @__PURE__ */ e.createElement(ButtonTag, { disabled: uploadStatus === "success" ? true : false }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, elementiListItem[uploadStatus].testoVHRightIcon), /* @__PURE__ */ e.createElement(Icon, { icon: elementiListItem[uploadStatus].rightIcon })), uploadStatus === "uploading" && /* @__PURE__ */ e.createElement(Progress, { value: progressValue, wrapperClassName: classesProgress })));
};
const UploadButton = ({ id, children, ...props }) => {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("input", { type: "file", id, className: "upload pictures-wall", multiple: true, ...props }), /* @__PURE__ */ e.createElement("label", { htmlFor: id }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-plus" }), /* @__PURE__ */ e.createElement("span", null, children)));
};
UploadListItem.UploadButton = UploadButton;
UploadListItem.__docgenInfo = { "description": "", "methods": [{ "name": "UploadButton", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ id, children, ...props }", "optional": false, "type": null }], "returns": null }], "displayName": "UploadListItem", "props": { "icon": { "defaultValue": { "value": "'it-file'", "computed": false }, "required": false }, "uploadStatus": { "defaultValue": { "value": "'success'", "computed": false }, "required": false }, "buttonTag": { "defaultValue": { "value": "'button'", "computed": false }, "required": false } } };
const meta = {
  title: "Documentazione/Form/Upload",
  component: Upload
};
const listaFilesArgs = {
  success: {
    uploadStatus: "success",
    fileName: "nome-file-01.pdf",
    fileWeight: "10 MB"
  },
  successLong: {
    uploadStatus: "success",
    fileName: "nome-file-02-nome-file-lungo-per-ellissi.doc",
    fileWeight: "10 MB"
  },
  uploading: {
    uploadStatus: "uploading",
    fileName: "nome-file-02.pdf",
    progressValue: 30
  },
  error: {
    uploadStatus: "error",
    fileName: "nome-file-03.pdf"
  }
};
const ListaFiles = {
  render: ({
    ...listaFilesArgs2
  }) => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Upload, { id: "esempio", label: "Carica" }), /* @__PURE__ */ e.createElement(UploadList, { tipologia: "file" }, Object.values(listaFilesArgs2).map((type) => {
    return /* @__PURE__ */ e.createElement(UploadListItem, { key: type.fileName, ...type });
  }))),
  args: {
    ...listaFilesArgs
  }
};
const listaFilesImmagineArgs = {
  success: {
    previewImage: true,
    previewImageSrc: "https://picsum.photos/40/40?image=1055",
    previewImageAlt: "descrizione immagine",
    uploadStatus: "success",
    fileName: "nome-file-01.pdf",
    fileWeight: "10 MB"
  },
  successLong: {
    previewImage: true,
    previewImageSrc: "https://picsum.photos/40/40?image=1056",
    previewImageAlt: "descrizione immagine",
    uploadStatus: "success",
    fileName: "nome-file-02-nome-file-lungo-per-ellissi.doc",
    fileWeight: "10 MB"
  },
  uploading: {
    previewImage: true,
    previewImageSrc: "https://picsum.photos/40/40?image=1057",
    previewImageAlt: "descrizione immagine",
    uploadStatus: "uploading",
    fileName: "nome-file-02.pdf",
    progressValue: 30
  },
  error: {
    previewImage: true,
    previewImageSrc: "https://picsum.photos/40/40?image=1058",
    previewImageAlt: "descrizione immagine",
    uploadStatus: "error",
    fileName: "nome-file-03.pdf"
  }
};
const ListaFilesImmagine = {
  render: ({
    ...listaFilesImmagineArgs2
  }) => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Upload, { id: "esempio_immagine", label: "Carica" }), /* @__PURE__ */ e.createElement(UploadList, { tipologia: "file", previewImage: true }, Object.values(listaFilesImmagineArgs2).map((type) => {
    return /* @__PURE__ */ e.createElement(UploadListItem, { key: type.fileName, ...type });
  }))),
  args: {
    ...listaFilesImmagineArgs
  }
};
const UploadAvatar = {
  render: (args) => /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Upload, { ...args, id: "ExampleUpload3", avatarImg: /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/men/21.jpg", alt: "descrizione immagine" }) })), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Upload, { ...args, id: "ExampleUpload4", avatarImg: /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/women/21.jpg", alt: "descrizione immagine" }), avatarSmall: true })))),
  args: {
    label: "Aggiorna",
    icon: "it-camera",
    isAvatar: true
  }
};
const Gallery = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(UploadList, { tipologia: "gallery" }, /* @__PURE__ */ e.createElement(UploadListItem, null, /* @__PURE__ */ e.createElement(UploadListItem.UploadButton, { id: "upload_gallery" }, "Carica foto"))), /* @__PURE__ */ e.createElement("p", { className: "mt-5" }, /* @__PURE__ */ e.createElement("strong", null, "Esempio Immagini Caricate")), /* @__PURE__ */ e.createElement(UploadList, { tipologia: "gallery" }, /* @__PURE__ */ e.createElement(UploadListItem, { previewImage: true, previewImageSrc: "https://picsum.photos/128/128?image=1020", previewImageAlt: "descrizione immagine" }), /* @__PURE__ */ e.createElement(UploadListItem, { previewImage: true, previewImageSrc: "https://picsum.photos/128/128?image=1038", previewImageAlt: "descrizione immagine" }), /* @__PURE__ */ e.createElement(UploadListItem, null, /* @__PURE__ */ e.createElement(UploadListItem.UploadButton, { id: "upload_gallery" }, "Carica foto"))))
};
const DragNdropHooks = () => {
  const [files, setFiles] = reactExports.useState([]);
  return /* @__PURE__ */ e.createElement("div", { className: "section" }, /* @__PURE__ */ e.createElement(UploadDragNdrop, { files, setFiles }));
};
const DragNdrop = {
  render: () => /* @__PURE__ */ e.createElement(DragNdropHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
ListaFiles.parameters = {
  ...ListaFiles.parameters,
  docs: {
    ...(_a = ListaFiles.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    ...listaFilesArgs\n  }: listaFilesArgsI) => <section>\n      <Upload id='esempio' label='Carica' />\n      <UploadList tipologia='file'>\n        {Object.values(listaFilesArgs).map(type => {\n        return <UploadListItem key={type.fileName} {...type} />;\n      })}\n      </UploadList>\n    </section>,\n  args: {\n    ...listaFilesArgs\n  }\n}",
      ...(_c = (_b = ListaFiles.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ListaFilesImmagine.parameters = {
  ...ListaFilesImmagine.parameters,
  docs: {
    ...(_d = ListaFilesImmagine.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    ...listaFilesImmagineArgs\n  }: listaFilesArgsI) => <section>\n      <Upload id='esempio_immagine' label='Carica' />\n      <UploadList tipologia='file' previewImage>\n        {Object.values(listaFilesImmagineArgs).map(type => {\n        return <UploadListItem key={type.fileName} {...type} />;\n      })}\n      </UploadList>\n    </section>,\n  args: {\n    ...listaFilesImmagineArgs\n  }\n}",
      ...(_f = (_e = ListaFilesImmagine.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
UploadAvatar.parameters = {
  ...UploadAvatar.parameters,
  docs: {
    ...(_g = UploadAvatar.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: args => <Container>\n      <Row>\n        <Col>\n          <Upload {...args} id='ExampleUpload3' avatarImg={<img src='https://randomuser.me/api/portraits/men/21.jpg' alt='descrizione immagine' />} />\n        </Col>\n        <Col>\n          <Upload {...args} id='ExampleUpload4' avatarImg={<img src='https://randomuser.me/api/portraits/women/21.jpg' alt='descrizione immagine' />} avatarSmall />\n        </Col>\n      </Row>\n    </Container>,\n  args: {\n    label: 'Aggiorna',\n    icon: 'it-camera',\n    isAvatar: true\n  }\n}",
      ...(_i = (_h = UploadAvatar.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Gallery.parameters = {
  ...Gallery.parameters,
  docs: {
    ...(_j = Gallery.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <section>\n      <UploadList tipologia='gallery'>\n        <UploadListItem>\n          <UploadListItem.UploadButton id='upload_gallery'>Carica foto</UploadListItem.UploadButton>\n        </UploadListItem>\n      </UploadList>\n      <p className='mt-5'>\n        <strong>Esempio Immagini Caricate</strong>\n      </p>\n      <UploadList tipologia='gallery'>\n        <UploadListItem previewImage={true} previewImageSrc='https://picsum.photos/128/128?image=1020' previewImageAlt='descrizione immagine' />\n        <UploadListItem previewImage={true} previewImageSrc='https://picsum.photos/128/128?image=1038' previewImageAlt='descrizione immagine' />\n        <UploadListItem>\n          <UploadListItem.UploadButton id='upload_gallery'>Carica foto</UploadListItem.UploadButton>\n        </UploadListItem>\n      </UploadList>\n    </section>\n}",
      ...(_l = (_k = Gallery.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
DragNdrop.parameters = {
  ...DragNdrop.parameters,
  docs: {
    ...(_m = DragNdrop.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <DragNdropHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'none'\n      }\n    }\n  }\n}",
      ...(_o = (_n = DragNdrop.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["ListaFiles", "ListaFilesImmagine", "UploadAvatar", "Gallery", "DragNdrop"];
const UploadStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DragNdrop,
  Gallery,
  ListaFiles,
  ListaFilesImmagine,
  UploadAvatar,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DragNdrop as D,
  Gallery as G,
  ListaFiles as L,
  UploadStories as U,
  ListaFilesImmagine as a,
  UploadAvatar as b
};
