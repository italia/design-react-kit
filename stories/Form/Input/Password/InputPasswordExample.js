import React from "react";

class InputPasswordExample extends React.Component {
    constructor() {
        super();
        this.state = {
            isFocused: false,
            hidden: true,
            icon: true
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleFocusLabel = () => {
        this.setState({
            isFocused: true
        });
    };

    toggleBlurLabel = e => {
        if (e.target.value === "") {
            this.setState({
                isFocused: !this.state.isFocused
            });
        }
    };

    toggleShow() {
        this.setState({ hidden: !this.state.hidden, icon: !this.state.icon });
    }

    render() {
        return (
            <div className="form-group">
                <input
                    type={this.state.hidden ? "password" : "text"}
                    className={
                        this.state.isFocused
                            ? "form-control input-password focus--mouse"
                            : "form-control input-password"
                    }
                    onFocus={this.toggleFocusLabel}
                    onBlur={e => this.toggleBlurLabel(e)}
                    id="exampleInputPassword"
                    aria-labelledby="infoPassword"
                />
                <span class="password-icon" aria-hidden="true">
                    <svg
                        class="password-icon-visible icon icon-sm"
                        onClick={this.toggleShow}
                    >
                        <use
                            xlinkHref={`/svg/sprite.svg#it-password-${
                                this.state.icon ? "visible" : "invisible"
                            }`}
                        />
                    </svg>
                </span>
                <label
                    htmlFor="exampleInputPassword"
                    className={this.state.isFocused ? "active" : ""}
                >
                    Password con label, placeholder e testo di aiuto
                </label>
                <small id="infoPassword" className="form-text text-muted">
                    Inserisci almeno 8 caratteri e una lettera maiuscola
                </small>
            </div>
        );
    }
}

export default InputPasswordExample;
