import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import {
    Button,
    FormGroup,
    Icon,
    Input,
    Label,
    LinkList,
    LinkListItem,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "../../src";

const meta: Meta<typeof ModalBody> = {
    title: "Documentazione/Componenti/Modale",
    component: ModalBody,
};

export default meta;

type Story = StoryObj<typeof ModalBody>;

export const _EsempioBase: Story = {
    render: () => (
        <div>
            <div className="modal-dialog" role="document">
                <ModalHeader>Titolo della modale</ModalHeader>
                <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
                <ModalFooter>
                    <Button color="secondary">Chiudi</Button>
                    <Button color="primary">Salva le modifiche</Button>
                </ModalFooter>
            </div>
        </div>
    ),
};

const ModaleBaseConBottoneChiusuraHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Mostra modale con bottone di chiusura
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy="esempio2">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio2">
                    Titolo della modale
                </ModalHeader>
                <ModalBody>
                    <p>Woohoo, stai leggendo questo testo in una modale!</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Salva modifiche
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const ModaleBaseConBottoneChiusura: Story = {
    render: () => {
        return <ModaleBaseConBottoneChiusuraHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ModaleBaseHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia la demo della modale
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy="esempio1">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio1">
                    Titolo della modale
                </ModalHeader>
                <ModalBody>
                    <p>Woohoo, stai leggendo questo testo in una modale!</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Salva modifiche
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};


export const ModaleBase: Story = {
    render: () => {
        return <ModaleBaseHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ModaleConIconaHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia modale con icona
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} withIcon labelledBy="esempio3">
                <ModalHeader icon="it-info-circle" id="esempio3">
                    This is a notification message more long than usual
                </ModalHeader>
                <ModalBody>
                    <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const ModaleConIcona: Story = {
    render: () => {
        return <ModaleConIconaHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ModaleConFormInputsHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia modale con form
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy="esempio4">
                <ModalHeader id="esempio4" toggle={() => toggleModal(!isOpen)}>
                    SCEGLI UNA OPZIONE
                </ModalHeader>
                <ModalBody>
                    <FormGroup check>
                        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
                        <Label check htmlFor="radio1">
                            Opzione 1
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name="gruppo1" type="radio" id="radio2" />
                        <Label check htmlFor="radio2">
                            Opzione 2
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name="gruppo1" type="radio" id="radio3" />
                        <Label check htmlFor="radio3">
                            Opzione 3
                        </Label>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary" onClick={() => toggleModal(!isOpen)}>
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)} disabled>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const ModaleConFormInputs: Story = {
    render: () => {
        return <ModaleConFormInputsHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ModaleConLinkListHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia modale con LinkList
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} withLinkList labelledBy="esempio5">
                <ModalHeader id="esempio5">
                    <span>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </ModalHeader>
                <ModalBody>
                    <LinkList>
                        <LinkListItem className="icon-left">
                            <Icon color="primary" icon="it-chevron-right" aria-hidden />
                            <span>Link list 1</span>
                        </LinkListItem>
                        <LinkListItem className="icon-left">
                            <Icon color="primary" icon="it-chevron-right" aria-hidden />
                            <span>Link list 2</span>
                        </LinkListItem>
                        <LinkListItem className="icon-left">
                            <Icon color="primary" icon="it-chevron-right" aria-hidden />
                            <span>Link list 3</span>
                        </LinkListItem>
                    </LinkList>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};


export const ModaleConLinkList: Story = {
    render: () => {
        return <ModaleConLinkListHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ModalePopConfirmHooks = () => {
    const [isOpenBase, toggleBaseModal] = useState(false);
    const [isOpenWithHeader, toggleModalWithHeader] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleBaseModal(!isOpenBase)} className="me-3">
                Lancia modale pop-confirm base
            </Button>
            <Button color="primary" onClick={() => toggleModalWithHeader(!isOpenWithHeader)} className="me-3">
                Lancia modale pop-confirm con titolo
            </Button>
            <Modal isOpen={isOpenBase} toggle={() => toggleBaseModal(!isOpenBase)} popConfirm>
                <ModalBody>
                    <p>Font Titillium 14px. Leading 21px.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleBaseModal(!isOpenBase)} size="sm">
                        Action one
                    </Button>
                    <Button color="secondary" onClick={() => toggleBaseModal(!isOpenBase)} size="sm" outline>
                        Action two
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={isOpenWithHeader} toggle={() => toggleModalWithHeader(!isOpenWithHeader)} popConfirm labelledBy="esempio6">
                <ModalHeader labelledBy="esempio6">Popconfirm header</ModalHeader>
                <ModalBody>
                    <p>Font Titillium 14px. Leading 21px.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleModalWithHeader(!isOpenWithHeader)} size="sm">
                        Action one
                    </Button>
                    <Button color="secondary" onClick={() => toggleModalWithHeader(!isOpenWithHeader)} size="sm" outline>
                        Action two
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};


export const ModalePopConfirm: Story = {
    render: () => {
        return <ModalePopConfirmHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ScrollDiContenutiLunghiHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia la demo della modale scrollabile
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy="esempio7">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio7">
                    Titolo della modale
                </ModalHeader>
                <ModalBody>
                    <div>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Salva modifiche
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const ScrollDiContenutiLunghi: Story = {
    render: () => {
        return <ScrollDiContenutiLunghiHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const ModaleConContenutoScrollabileHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia modale con contenuto scrollabile
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} scrollable labelledBy="esempio8">
                <ModalHeader id="esempio8">INTESTAZIONE MODALE</ModalHeader>
                <ModalBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" outline onClick={() => toggleModal(!isOpen)} size="sm">
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)} size="sm">
                        Azione Uno
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const ModaleConContenutoScrollabile: Story = {
    render: () => {
        return <ModaleConContenutoScrollabileHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const CentraturaVerticaleStoryHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia la demo della modale
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} centered labelledBy="esempio9">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="essempio9">
                    Titolo della modale
                </ModalHeader>
                <ModalBody>
                    <p>Woohoo, stai leggendo questo testo in una modale!</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Salva modifiche
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const _CentraturaVerticale: Story = {
    render: () => {
        return <CentraturaVerticaleStoryHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const AllineamentoASinistraHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia la demo della modale a sinistra
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} align="left" scrollable labelledBy="esempio10">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio10">
                    This is a notification message
                </ModalHeader>
                <ModalBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const AllineamentoASinistra: Story = {
    render: () => {
        return <AllineamentoASinistraHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const AllineamentoADestraHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia la demo della modale a destra
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} align="right" scrollable labelledBy="esempio11">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio11">
                    This is a notification message
                </ModalHeader>
                <ModalBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const AllineamentoADestra: Story = {
    render: () => {
        return <AllineamentoADestraHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const RimuovereLanimazioneHooks = () => {
    const [isOpen, toggleModal] = useState(false);

    return (
        <div>
            <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                Lancia la demo della modale
            </Button>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} fade={false} labelledBy="esempio12">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio12">
                    Titolo della modale
                </ModalHeader>
                <ModalBody>
                    <p>Woohoo, stai leggendo questo testo in una modale!</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Salva modifiche
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const RimuovereLanimazione: Story = {
    render: () => {
        return <RimuovereLanimazioneHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

const DimensioniHooks = () => {
    const [isOpen, toggleModal] = useState(false);
    const [size, setSize] = useState("");

    return (
        <div>
            <div>
                <Button
                    color="primary"
                    onClick={() => {
                        setSize("lg");
                        toggleModal(true);
                    }}
                    className="me-3"
                >
                    Modale grande
                </Button>
                <Button
                    color="primary"
                    onClick={() => {
                        setSize("sm");
                        toggleModal(true);
                    }}
                >
                    Modale piccola
                </Button>
            </div>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} size={size} labelledBy="esempio13">
                <ModalHeader toggle={() => toggleModal(!isOpen)} id="esempio13">
                    Titolo della modale
                </ModalHeader>
                <ModalBody>
                    <p>Woohoo, stai leggendo questo testo in una modale!</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                        Chiudi
                    </Button>
                    <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                        Salva modifiche
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const _Dimensioni: Story = {
    render: () => {
        return <DimensioniHooks />
    },
    parameters: {
        layout: 'centered',
        docs: {
            canvas: { sourceState: "none" },
        },
    }
}

//Componenti non utlizzati ma presenti precedentemente
/* export const ContenutoDellaModaleVariabile: Story = {
    render: () => {
        const [open, toggleModal] = useState(false);
        const [username, setUsername] = useState("");

        const toggle = () => toggleModal(!open);
        const openModal = (name: string) => {
            setUsername(name);
            toggleModal(true);
        };

        return (
            <div>
                <div>
                    <Button color="primary" onClick={() => openModal("Mario")} className="me-3">
                        Apri la modale per Mario
                    </Button>
                    <Button color="primary" onClick={() => openModal("Paola")} className="me-3">
                        Apri la modale per Paola
                    </Button>
                    <Button color="primary" onClick={() => openModal("Luca")} className="me-3">
                        Apri la modale per Luca
                    </Button>
                </div>

                <Modal fade centered isOpen={open} toggle={toggle} labelledBy="esempio14">
                    <ModalHeader toggle={toggle} id="esempio14">
                        New message for {username}
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <FormGroup>
                                <Input type="text" id="recipient-name" value={username} label="Destinatario:" />
                            </FormGroup>
                            <FormGroup>
                                <TextArea name="text" id="message-text" rows={3} label="Messaggio:" />
                            </FormGroup>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            Chiudi
                        </Button>
                        <Button color="primary" onClick={toggle}>
                            Salva modifiche
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
};

export const TooltipAndPopover: Story = {
    render: () => {
        const [isOpen, toggleModal] = useState(false);
        const [popoverOpen, togglePopover] = useState(false);

        return (
            <div>
                <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                    Lancia la demo della modale
                </Button>
                <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
                    <ModalHeader toggle={() => toggleModal(!isOpen)}>Titolo della modale</ModalHeader>
                    <ModalBody>
                        <h5>Popover in una modale</h5>
                        <p>
                            Questo
                            <Button color="secondary" id="Example" onClick={() => togglePopover(!popoverOpen)}>
                                Pulsante
                            </Button>
                            attiva un popover al click.
                            <Popover placement="right" isOpen={popoverOpen} target="Example" toggle={() => togglePopover(!popoverOpen)}>
                                <PopoverHeader>Titolo del popover</PopoverHeader>
                                <PopoverBody>Il contenuto del corpo del popover è impostato in questo elemento.</PopoverBody>
                            </Popover>
                        </p>
                        <hr />
                        <h5>Tooltip in una modal</h5>
                        <p>
                            <Link href="#" title="Tooltip" id="Example1">
                                Questo link
                            </Link>
                            e
                            <Link href="#" title="Tooltip" id="Example2">
                                questo link
                            </Link>
                            attivano un tooltip al passaggio del mouse.
                            <UncontrolledTooltip placement="top" target="Example1">
                                Tooltip
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="top" target="Example2">
                                Tooltip
                            </UncontrolledTooltip>
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                            Chiudi
                        </Button>
                        <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                            Salva le modifiche
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
};

export const UsoDellaGriglia: Story = {
    render: () => {
        const [isOpen, toggleModal] = useState(false);

        return (
            <div>
                <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                    Lancia la demo della modale
                </Button>
                <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
                    <ModalHeader toggle={() => toggleModal(!isOpen)}>Le griglie nelle modali</ModalHeader>
                    <ModalBody>
                        <Container fluid className="bd-example-row">
                            <Row>
                                <Col md="4">.col-md-4</Col>
                                <Col md="4" className="col-md-4 ms-auto">
                                    .col-md-4 .ms-auto
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3" className="col-md-3 ms-auto">
                                    .col-md-3 .ms-auto
                                </Col>
                                <Col md="2" className="col-md-2 ms-auto">
                                    .col-md-2 .ms-auto
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className="col-md-6 ms-auto">
                                    .col-md-6 .ms-auto
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="9">
                                    Level 1: .col-sm-9
                                    <Row>
                                        <Col md="8" sm="6">
                                            Level 2: .col-8 .col-sm-6
                                        </Col>
                                        <Col md="4" sm="6">
                                            Level 2: .col-4 .col-sm-6
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
                            Chiudi
                        </Button>
                        <Button color="primary" onClick={() => toggleModal(!isOpen)}>
                            Salva le modifiche
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}; */