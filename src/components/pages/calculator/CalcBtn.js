import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export class CalcBtn extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      className: "key-pad",
      xs: "2",
      sm: "2",
      md: "1",
      lg: "1",
      // icon: "fas fa-times",
      // variant: "warning",
      // value: "{" * "}",
      // id: "multiply",
    };
    // Initial props
    this.props = {
      icon: "fas fa-times",
      variant: "warning",
      value: "{" * "}",
      id: "multiply",
    };
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
    // this.handleClear = this.handleClear.bind(this);
  }

  static propTypes = {
    className: PropTypes.string.isRequired,
    xs: PropTypes.string.isRequired,
    sm: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  // handleClick(id) { this.setState(state => ({ display: {id} })); }
  // handleClick() { this.setState(state => ({ display: 7 })); }
  // handleClear() { this.setState(state => ({ display: 0 })); }

  render() {
    const { className, xs, sm, md, lg } = this.state;
    const { value, variant, id, icon } = this.props;
    return (
      <Col as={Button}
        className={className}
        xs={xs} sm={sm} md={md} lg={lg}
        value={value}
        variant={variant}
        id={id}>
        <h2>
          {value}
          <i className={icon}></i>
        </h2>
      </Col >
    );
  }
}

export default CalcBtn;
