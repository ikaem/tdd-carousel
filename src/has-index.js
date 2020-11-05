// src/has-index.js
import React from "react";

const HasIndex = (Component, indexPropName) => {
  return class ComponentWithIndex extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        index: 0,
      };
    }
    static displayName = `HasIndex(${Component.displayName || Component.name})`;

    handleDecrement = (upperBound) => {
      this.setState(({ index }) => {
        const newIndex = upperBound
          ? (index + upperBound - 1) % upperBound
          : index - 1;
        return { index: newIndex };
      });
    };

    handleIncrement = (upperBound) => {
      this.setState(({ index }) => {
        const newIndex = upperBound ? (index + 1) % upperBound : index + 1;
        return { index: newIndex };
      });
    };

    render() {
      const indexProps = {
        [indexPropName]: this.state.index,
        [`${indexPropName}Decrement`]: this.handleDecrement,
        [`${indexPropName}Increment`]: this.handleIncrement,
      };
      return <Component {...this.props} {...indexProps} />;
    }
  };
};

export default HasIndex;
