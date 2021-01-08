import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Pomodor.css';

export class Pomodoro extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      tglStart: "Start",
      tglVariant: 'btn-success pomodoro-pad slab',
      timeLft: 1500,
      timeWorkSession: 1500,
      timeBreak: 300,
      clicks: 0,
      onBreak: false,
      show: true,
      audio: document.getElementById("beep")
    };
    // This binding is necessary to make `this` work in the callback
    // this.setToggleOnOff = this.setToggleOnOff.bind(this);
    // or not necessary if using an arrow function..
  }

  static propTypes = {
    tglStart: PropTypes.string.isRequired,
    tglVariant: PropTypes.string.isRequired,
    timeLft: PropTypes.number.isRequired,
    timeWorkSession: PropTypes.number.isRequired,
    timeBreak: PropTypes.number.isRequired,
  };

  incrementBreak = () => {
    let { timeBreak } = this.state;
    if (timeBreak < 3600) {
      this.setState({
        timeBreak: timeBreak + 60,
        timeLft: timeBreak + 60
      });
    }
  };

  incrementWorkSession = () => {
    let { timeWorkSession } = this.state;
    if (timeWorkSession < 3600) {
      this.setState({
        timeWorkSession: timeWorkSession + 60,
        timeLft: timeWorkSession + 60
      });
    }
  };

  decrementBreak = () => {
    let { timeBreak } = this.state;
    if (timeBreak > 61) {
      this.setState({
        timeBreak: timeBreak - 60,
        timeLft: timeBreak - 60
      });
    }
  };

  decrementWorkSession = () => {
    let { timeWorkSession } = this.state;
    if (timeWorkSession > 61) {
      this.setState({
        timeWorkSession: timeWorkSession - 60,
        timeLft: timeWorkSession - 60
      });
    }
  };

  setReset = () => {
    // Clearing the interval
    let audio = document.getElementById("beep");
    clearInterval(this.interval);
    this.setState({
      tglVariant: 'btn-success pomodoro-pad slab',
      timeWorkSession: 1500,
      tglStart: "Start",
      timeBreak: 300,
      timeLft: 1500,
      onBreak: false,
      show: true,
    });
    audio.pause();
    audio.currentTime = 0;
  };

  setToggleOnOff = () => {
    let { tglStart, timeWorkSession } = this.state;
    if (tglStart === "Start") {
      this.interval = setInterval(this.countDown, 1000);
      this.setState({
        tglStart: "Pause",
        tglVariant: 'btn-warning pomodoro-pad slab',
        timeLeft: timeWorkSession,
      });
    } else {
      this.setState({
        tglStart: "Start",
        tglVariant: 'btn-success pomodoro-pad slab',
      });
      // Clearing the interval
      clearInterval(this.interval);
    }
  };

  countDown = () => {
    let { onBreak, timeBreak, timeLft, timeWorkSession } = this.state;
    // If the time reach 0 then we display Buzzzz! alert.
    let audio = document.getElementById("beep");
    if (timeLft === 0) {
      this.setState({
        onBreak: !onBreak
      });
      audio.play();
      if (!onBreak) {
        this.setState({
          timeLft: timeBreak,
        });
      } else {
        this.setState({
          timeLft: timeWorkSession,
        });
      }
      // clearInterval(this.interval);
    } else {
      // We decrease the time second by second
      this.setState({
        timeLft: this.state.timeLft - 1
      });
    }
  };

  displayTimer(seconds) {
    // Formatting the time into mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  displayHack(seconds) {
    // Formatting the time into mm:ss
    // const m = Math.floor(seconds % 3600 / 60);
    const m = seconds / 60;
    const s = seconds % 3600 % 60;

    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  displayMinutes(seconds) {
    // Formatting the time into mm:ss
    // const m = Math.floor(seconds % 3600 / 60);
    const m = seconds / 60;
    // const s = Math.floor(seconds % 3600 % 60);

    return `${m}`;
  }
  clockify = (tme) => {
    let minutes = Math.floor(tme / 60);
    let seconds = tme - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  };

  render() {
    let { onBreak, tglStart, tglVariant, timeBreak, timeLft, timeWorkSession } = this.state;
    return (
      <Container>
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clockhttps://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock"
            target="_blank"
            rel="noopener noreferrer"
            title="25 + 5 Clock"
          >
            <i className="fas  fa-hourglass-start"></i> 25 + 5 Clock <i className="fas  fa-hourglass-half"></i>
          </a>
        </h4>
        <Row className="justify-content-center">
          {/* increments */}
          <Col
            as={Button}
            variant="success"
            id="break-increment"
            className="pomodoro-pad"
            onClick={this.incrementBreak}
            xs={2} sm={1} md={1} lg={1}
          >
            <i class="fas fa-plus-circle">
            </i>
          </Col>
          <Col
            as={Button}
            variant="success"
            id="session-increment"
            className="pomodoro-pad"
            onClick={this.incrementWorkSession}
            xs={2} sm={1} md={1} lg={1}
          >
            <i class="fas fa-plus-circle">
            </i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Break /counnt/counnt /Work */}
          <Col
            as={Button}
            id="break-label"
            variant={onBreak ? "warning" : "dark"}
            className="pomodoro-pad slab"
            xs={3} sm={3} md={2} lg={2}
          >
            <h5>
              Break
          </h5>
          </Col>
          <Col
            as={Button}
            variant="dark"
            id="break-length"
            className="pomodoro-pad"
            xs={2} sm={1} md={1} lg={1}
          >
            <h5>
              {/* {onBreak ? "on Break" : "at Work"} */}
              {this.displayMinutes(timeBreak)}
            </h5>
          </Col>
          <Col
            as={Button}
            variant="dark"
            id="timer-label"
            className="pomodoro-pad"
            xs={2} sm={1} md={1} lg={1}
          >
            <h5>
              {onBreak ? "Break" : "Work"}
              <br></br>
              {this.displayMinutes(timeWorkSession)}
            </h5>
          </Col>
          <Col
            as={Button}
            variant={onBreak ? "dark" : "warning"}
            id="session-label"
            className="pomodoro-pad slab"
            xs={3} sm={3} md={2} lg={2}
          >
            <h5>
              Work
          </h5>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* decrements */}
          <Col
            as={Button}
            variant="info"
            id="break-decrement"
            className="pomodoro-pad"
            onClick={this.decrementBreak}
            xs={2} sm={1} md={1} lg={1}
          >
            <i class="fas fa-minus-square">
            </i>
          </Col>
          <Col
            as={Button}
            variant="info"
            id="session-decrement"
            className="pomodoro-pad"
            onClick={this.decrementWorkSession}
            xs={2} sm={1} md={1} lg={1}
          >
            <i class="fas fa-minus-square">
            </i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* display */}
          <Col
            as="h1"
            id="time-left"
            variant="warning"
            xs={5} sm={4} md={3} lg={2}
            className="pomodoro-pad pomo-display"
          >
            <h1 className="slab"
              id="time-left"
            >
              {/* 8. I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00). */}
              {/* time-left is not formatted correctly: expected '00' to equal '60' */}
              {this.clockify(timeLft)}
              <h6>
                {/* {this.displayTimer(timeLft)}
                <br></br>
                {this.displayHack(timeLft)}
                <br></br>
                {this.displayMinutes(timeLft)}
                <br></br> */}
                {/* {this.clockify()} */}
              </h6>
            </h1>
          </Col>
          <Col
            as={Button}
            variant="dark"
            id="session-length"
            className="pomodoro-pad"
            xs={3} sm={2} md={2} lg={1}
          >
            <h5>
              {this.displayMinutes(timeLft)}
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* start, stop & reset */}
          <Col
            as={Button}
            id="start_stop"
            className={tglVariant}
            xs={5} sm={4} md={3} lg={2}
            onClick={this.setToggleOnOff}
          >
            <h5>
              {tglStart}
            </h5>
          </Col>
          <Col
            id="reset"
            as={Button}
            onClick={this.setReset}
            xs={3} sm={2} md={2} lg={1}
            className="pomodoro-pad slab"
          >
            <h5>
              Reset
            </h5>
          </Col>
        </Row>
        <audio
          id="beep"
          // controls
          src="https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/pomodoro/440957__l-q__coin-3.wav?raw=true">
          Your browser does not support the
            <code>audio</code> element.
        </audio>
        <br></br>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/collections/Z-WfaCrBVBZa9w"
            target="_blank"
            rel="noopener noreferrer"
            title="These Episodes on Twitch I'm working on the Pomodor timer for FreeCodeCamp using ReactBootstrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </Container>
    );
  }
}

export default Pomodoro;

