import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';

export class Toggle extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      tglStart: "Start",
      tglVariant: 'btn-success',
      timeLft: 3,
    };
    // This binding is necessary to make `this` work in the callback
    // this.setToggleOnOff = this.setToggleOnOff.bind(this);
    // or not necessary if using an arrow function..
  }

  static propTypes = {
    tglStart: PropTypes.string.isRequired,
    tglVariant: PropTypes.string.isRequired,
    timeLft: PropTypes.number.isRequired,
  };

  setToggleOnOff = () => {
    let { tglStart } = this.state;
    if (tglStart === "Start") {
      this.interval = setInterval(this.countDown, 1000);
      this.setState({
        tglStart: "Pause",
        tglVariant: 'btn-warning',
      });
    } else {
      this.setState({
        tglStart: "Start",
        tglVariant: 'btn-success',
      });
      // Clearing the interval
      clearInterval(this.interval);
    }
  };

  countDown = () => {
    // If the time reach 0 then we display Buzzzz! alert.
    if (this.state.timeLft === 0) {
      this.setState({
        tglStart: "Start",
        tglVariant: 'btn-success',
        timeLft: 10
      });
      clearInterval(this.interval);
    } else {
      // We decrease the time second by second
      this.setState({
        timeLft: this.state.timeLft - 1
      });
    }
  };

  render() {
    let { tglStart } = this.state;
    let { tglVariant } = this.state;
    let { timeLft } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col as={Button} className={tglVariant} xs={5} sm={4} md={3} lg={2}
            onClick={this.setToggleOnOff}>
            <h4>
              {tglStart}
              <br></br>
              {tglVariant}
            </h4>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-center">
          <Col as={Button} id="start_stop" className={tglVariant} xs={4} sm={4} md={3} lg={2}
            onClick={this.setToggleOnOff}>
            <h4 id="timer-left">
              {timeLft}
            </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Toggle;
