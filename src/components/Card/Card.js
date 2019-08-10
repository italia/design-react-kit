import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Icon, Button } from "../../../src";

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.node,
    title: PropTypes.node,
    text: PropTypes.node,
    shade: PropTypes.node,
    big: PropTypes.node,
    after: PropTypes.node,
    space: PropTypes.node,
    article: PropTypes.node,
    category: PropTypes.node,
    signature: PropTypes.node,
    date: PropTypes.node,
    link: PropTypes.node,
    icon: PropTypes.node,
    name: PropTypes.node,
    iconName: PropTypes.node,
    tagCard: PropTypes.node,
    tagName: PropTypes.node,
    image: PropTypes.node,
    imageTitle: PropTypes.node,
    specialCard: PropTypes.node
};

const defaultProps = {
    tag: "div",
    link: "#"
};

class Card extends React.Component {
    render() {
        const {
            className,
            tag: Tag,
            title,
            text,
            shade,
            big,
            after,
            space,
            article,
            category,
            signature,
            date,
            link,
            icon,
            name,
            iconName,
            tagCard,
            tagName,
            image,
            imageTitle,
            specialCard,
            ...attributes
        } = this.props;

        const cardWrapperClasses = classNames(
            space ? "card-space" : false,
            "card-wrapper"
        );
        const innerCardWrapperClasses = classNames(
            shade ? "card-bg" : false,
            big ? "card-big" : false,
            after ? "no-after" : false,
            "card"
        );
        if (shade || space) {
            return (
                <Tag className={cardWrapperClasses} {...attributes}>
                    <div className={innerCardWrapperClasses}>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <a className="read-more" href={this.props.link}>
                                <span className="text">Leggi di più</span>
                                <Icon icon={"it-arrow-right"} />
                            </a>
                        </div>
                    </div>
                </Tag>
            );
        }
        if (icon) {
            return (
                <Tag className={cardWrapperClasses} {...attributes}>
                    <div className={innerCardWrapperClasses}>
                        <div className="card-body">
                            <div classNames="categoryicon-top">
                                <Icon icon={this.props.iconName} />
                                <span className="text">
                                    {this.props.category}
                                    <br />
                                    {this.props.name}
                                </span>
                            </div>
                            <a href={this.props.link}>
                                <h5 className="card-title">{this.props.title} </h5>
                            </a>
                            <p className="card-text">{this.props.text} </p>
                        </div>
                    </div>
                </Tag>
            );
        }
        if (article) {
            return (
                <Tag className={cardWrapperClasses} {...attributes}>
                    <div className={innerCardWrapperClasses}>
                        <div className="card-body">
                            <div className="category-top">
                                <a className="category" href={this.props.link}>
                                    {this.props.category}
                                </a>
                                <span className="data">{this.props.date}</span>
                            </div>
                            <h5 className="card-title big-heading">
                                {this.props.title}
                            </h5>
                            <p className="card-text">{this.props.text} </p>
                            <span className="card-signature">
                                {this.props.signature}
                            </span>
                            <a className="read-more" href={this.props.link}>
                                <span className="text">Leggi di più</span>
                                <Icon icon={"it-arrow-right"} />
                            </a>
                        </div>
                    </div>
                </Tag>
            );
        }
        if (big && tagCard) {
            return (
                <div className="card-wrapper card-space">
                    <div className="card card-bg card-big no-after">
                        <div className="card-body">
                            <div className="head-tags">
                                <a className="card-tag" href={this.props.link}>
                                    {this.props.tagName}
                                </a>
                                <span className="data">{this.props.date}</span>
                            </div>
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <div className="it-card-footer">
                                <span className="card-signature">
                                    {this.props.signature}
                                </span>
                                <Button outline color="primary" size="sm">
                                    Action
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (big) {
            return (
                <div className="card-wrapper card-space">
                    <div className="card card-bg card-big">
                        <div className="card-body">
                            <div className="top-icon">
                                <Icon icon={this.props.iconName} />
                            </div>
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <a className="read-more" href={this.props.link}>
                                <span className="text">Leggi di più</span>
                                <Icon icon={"it-arrow-right"} />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        if(image && specialCard){
            return(
                <div className="card-wrapper">
                <a className="card card-img no-after special-card" href={this.props.link}>
                    <div className="img-responsive-wrapper">
                        <div className="img-responsive">
                            <div className="img-wrapper">
                                <img
                                    src={this.props.image}
                                    title={this.props.imageTitle}
                                    alt="imagealt"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="head-tags">
                            <span className="data">{this.props.date}</span>
                        </div>
                        <h5 className="card-title">{this.props.title}
                        </h5>
                    </div>
                </a>
            </div>
            );

        }
        if (image) {
            return (
                <div className="card-wrapper">
                    <div className="card card-img no-after">
                        <div className="img-responsive-wrapper">
                            <div className="img-responsive">
                                <figure className="img-wrapper">
                                    <img
                                        src={this.props.image}
                                        title={this.props.imageTitle}
                                        alt="ExampleImage"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text" />
                            <a className="read-more" href={this.props.link}>
                                <span className="text">Leggi di più</span>
                                <Icon icon={"it-arrow-right"} />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <Tag className={cardWrapperClasses} {...attributes}>
                <div className={innerCardWrapperClasses}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                </div>
            </Tag>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
