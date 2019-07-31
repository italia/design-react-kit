import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    value: PropTypes.number,
    label: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    role: PropTypes.string,
    intermediate: PropTypes.bool,
    color: PropTypes.string
};

const defaultProps = {
    tag: "div",
    role: "progressbar",
    minValue: "0",
    maxValue: "100",
    intermediate: false,
};

class Progress extends React.Component {
    render() {
        const {
            className,
            tag: Tag,
            role,
            value,
            label,
            minValue,
            maxValue,
            intermediate,
            color,
            ...attributes
        } = this.props;
        const wrapperClasses = classNames("progress-bar-wrapper");
        const secondaryWrapperClasses = classNames(
            className,
            intermediate ? "progress-indeterminate" : false,
            color ? "progress-color" : false,
            "progress"
        );
        const classes = classNames(
            className,
            "progress-bar",
            color ? `bg-${this.props.color}` : false
        );

        if (label && value) {
            return (
                <Tag className={wrapperClasses}>
                    <div className="progress-bar-label">
                        <span className="sr-only">{this.props.label}</span>
                        {this.props.value + "%"}
                    </div>
                    <Tag className={secondaryWrapperClasses}>
                        <div
                            {...attributes}
                            className={classes}
                            role={this.props.role}
                            style={{ width: this.props.value + "%" }}
                            aria-valuenow={this.props.value}
                            aria-valuemin={this.props.minValue}
                            aria-valuemax={this.props.maxValue}
                        />
                    </Tag>
                </Tag>
            );
        }

        return (
            <Tag className={secondaryWrapperClasses}>
                <div className="progress-bar-label">
                    <span className="sr-only">{this.props.label}</span>
                </div>
                <div
                    {...attributes}
                    className={classes}
                    role={this.props.role}
                    style={{ width: this.props.value + "%" }}
                    aria-valuenow={this.props.value}
                    aria-valuemin={this.props.minValue}
                    aria-valuemax={this.props.maxValue}
                />
            </Tag>
        );
    }
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
