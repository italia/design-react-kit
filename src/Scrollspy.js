import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Extracted from https://github.com/roderickhsiao/react-in-viewport due to `componentDidUpdate` not working
class InViewport extends React.PureComponent {
  state = {
    inViewport: false
  };

  observer = null;
  node = null;
  intersected = false;

  componentWillUnmount() {
    this.stopObserver(this.node, this.observer);
  }

  componentDidMount() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    this.initIntersectionObserver();
    this.startObserver(this.node, this.observer);
  }

  /* taken out from original HoC
  componentDidUpdate(prevProps, prevState) {
    // reset observer on update, to fix race condition that when observer init,
    // the element is not in viewport, such as in animation
    if (!this.intersected && !prevState.inViewport) {
      if (this.observer && this.node) {
        this.observer.unobserve(this.node);
        this.observer.observe(this.node);
      }
    }
  }
  */

  initIntersectionObserver = () => {
    let options = {};
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        this.handleIntersection,
        options
      );
    }
  };

  startObserver(node, observer) {
    if (node && observer) {
      observer.observe(node);
    }
  }

  stopObserver(node, observer) {
    if (node && observer) {
      observer.unobserve(node);
      observer.disconnect();
      this.observer = null;
    }
  }

  handleIntersection = entries => {
    let config = {};
    const { onEnterViewport, onLeaveViewport } = this.props;
    const entry = entries[0] || {};
    const { intersectionRatio } = entry;
    const inViewport = intersectionRatio > 0;

    // enter
    if (!this.intersected && inViewport) {
      this.intersected = true;
      onEnterViewport && onEnterViewport();
      this.setState({
        inViewport
      });
      return;
    }

    // leave
    if (this.intersected && !inViewport) {
      this.intersected = false;
      onLeaveViewport && onLeaveViewport();
      if (config.disconnectOnLeave) {
        // disconnect obsever on leave
        this.observer && this.observer.disconnect();
      }
      this.setState({
        inViewport
      });
    }
  };

  setRef = node => {
    this.node = ReactDOM.findDOMNode(node);
  };

  setInnerRef = node => {
    if (node && !this.node) {
      // handle stateless
      this.node = ReactDOM.findDOMNode(node);
      this.initIntersectionObserver();
      this.startObserver(this.node, this.observer);
    }
  };

  render() {
    const {
      onEnterViewport,
      onLeaveViewport,
      children,
      ...others
    } = this.props;

    // pass ref to class and innerRef for stateless component
    // const refProps = isStateless(children)
    //   ? { innerRef: this.setInnerRef }
    //   : { ref: this.setRef };
    const refProps = { ref: this.setRef };
    return (
      <div {...others} {...refProps}>
        {children}
      </div>
    );
  }
}

class Scrollspy extends React.Component {
  render() {
    const { children, onEnter, onLeave } = this.props;

    return (
      <InViewport onEnterViewport={onEnter} onLeaveViewport={onLeave}>
        {children}
      </InViewport>
    );
  }
}

export default Scrollspy;
