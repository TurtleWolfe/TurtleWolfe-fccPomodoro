import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Drum.css';

export class Drum extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      author: "Douglas Adams",
      source: "So Long, and Thanks for All the Fish",
      quote: "change all this",
    };

    // This binding is necessary to make `this` work in the callback
    // this.setQuote = this.setQuote.bind(this);

  }
  static propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };

  playAudioBeat = () => {
    this.audio.play();
    this.audio.currentTime = 0;
  };

  render() {
    return (
      <Container id="drum-machine">
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine"
            target="_blank"
            rel="noopener noreferrer"
            title="Drum Machine"
          >
            <i className="fas fa-drum"></i> Drum Machine <i className="fas fa-drum"></i>
          </a>
        </h4>
        <br></br>
        <h4 id="display">
          Audio Tags Hear
        </h4>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={9}
            variant="success"
            id="q"
            onClick={this.playAudioBeat}
          >
            <h5>
              Q
            </h5>
            <audio
              id="Q"
              className="clip"
              ref={ref => this.audio = ref}
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={10}
            variant="success"
            id="w"
            onClick={this.playAudioBeat}
          >
            <h5>
              W
            </h5>
            <audio
              id="W"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={10}
            variant="success"
            id="e"
            onClick={this.playAudioBeat}
          >
            <h5>
              E
            </h5>
            <audio
              id="E"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
        </Row>
        {/* <br></br> */}
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={9}
            variant="success"
            id="a"
            onClick={this.playAudioBeat}
          >
            <h5>
              A
            </h5>
            <audio
              id="A"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={10}
            variant="success"
            id="s"
            onClick={this.playAudioBeat}
          >
            <h5>
              S
            </h5>
            <audio
              id="S"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={10}
            variant="success"
            id="d"
            onClick={this.playAudioBeat}
          >
            <h5>
              D
            </h5>
            <audio
              id="D"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
        </Row>
        {/* <br></br> */}
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={9}
            variant="success"
            id="z"
            onClick={this.playAudioBeat}
          >
            <h5>
              Z
            </h5>
            <audio
              id="Z"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={10}
            variant="success"
            id="x"
            onClick={this.playAudioBeat}
          >
            <h5>
              X
            </h5>
            <audio
              id="X"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={10}
            variant="success"
            id="c"
            onClick={this.playAudioBeat}
          >
            <h5>
              C
            </h5>
            <audio
              id="C"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Col>
          {' '}
        </Row>
        <input id="typeinp" type="range" min="0" max="49" defaultValue="17" step="1" />
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/collections/Zh4cSjzCVBaSEw"
            target="_blank"
            rel="noopener noreferrer"
            title="These Episodes on Twitch I build a drum machine for my freeCodeCamp projects with React-BootStrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </Container>
    );
  }
}

export default Drum;
