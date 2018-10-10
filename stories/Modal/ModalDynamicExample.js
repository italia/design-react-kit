import React from "react";
import {
    Button,
    Modal,
    Label,
    FormGroup,
    Input,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "../../src";

class ModalExample extends React.Component {
    state = {
        modal: false,
        username: ""
    };

    openModal = name => {
        this.setState({
            modal: !this.state.modal,
            username: name
        });
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        const { centered, fade } = this.props;
        const { username } = this.state;

        return (
            <div>
                <div>
                    {["Mario", "Paola", "Luca"].map(name => (
                        <Button
                            key={name}
                            color="primary"
                            onClick={() => this.openModal(name)}
                            className="mr-3"
                        >
                            Apri la modale per {name}
                        </Button>
                    ))}
                </div>

                <Modal
                    fade={fade}
                    size={this.state.size}
                    centered={centered}
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>
                        New message for {username}
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <FormGroup>
                                <Input
                                    type="text"
                                    id="recipient-name"
                                    value={username}
                                />
                                <Label for="recipient-name">
                                    Destinatario:
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="message-text"
                                    rows="3"
                                />
                                <Label for="message-text">Messaggio:</Label>
                            </FormGroup>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Chiudi
                        </Button>
                        <Button color="primary" onClick={this.toggle}>
                            Salva modifiche
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;
