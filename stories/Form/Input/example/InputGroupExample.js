import React from "react";
import { Input } from "../../../../src";

class InputGroupExample extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Input
                    type="text"
                    label="Campo di tipo testuale"
                    id="exampleInputText"
                />
                <Input
                    type="email"
                    label="Campo di tipo email"
                    id="exampleInputEmail"
                />
                <Input
                    type="number"
                    label="Campo di tipo numerico"
                    id="exampleInputNumber"
                />
                <Input
                    type="tel"
                    label="Campo di tipo telefono"
                    id="exampleInputTel"
                />
                <Input
                    type="time"
                    label="Campo di tipo ora"
                    id="exampleInputTime"
                    min="9:00"
                    max="18:00"
                />
            </div>
        );
    }
}

export default InputGroupExample;
