import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Quote.css';

export class Quote extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      author: "Douglas Adams",
      source: "So Long, and Thanks for All the Fish",
      quote: "And as he drove on, the rainclouds dragged down the sky after him, for, though he did not know it, Rob McKenna was a Rain God.",
    };

    // This binding is necessary to make `this` work in the callback
    this.setQuote = this.setQuote.bind(this);

  }
  // Initial State
  // static defaultProps = {
  //   author: "Douglas Adams",
  //   source: "So Long, and Thanks for All the Fish",
  //   quote: "And as he drove on, the rainclouds dragged down the sky after him, for, though he did not know it, Rob McKenna was a Rain God. All he knew was that his working days were miserable and he had a succession of lousy holidays. All the clouds knew was that they loved him and wanted to be near him, to cherish him, and to water him.",
  // };

  // Quote.propTypes = {
  // this.propTypes = {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    // source: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };

  async componentDidMount() {
    const res = await axios.get('https://api.quotable.io/random');
    // console.log(res.data);
    this.setState({
      author: res.data.author,
      // source: "Return of the Jedi",
      quote: res.data.content,
    });
  }

  setQuote() {
    axios.get('https://api.quotable.io/random').then(res => this.setState({
      author: res.data.author,
      // source: "Return of the Jedi",
      quote: res.data.content,
    })
    );
    // console.log("Qque");
    return;
  };

  render() {
    let { quote, author } = this.state;

    return (
      <Container>
        <Card bg="dark" style={{ width: '90%', margin: 'auto' }} id="quote-box">
          <Card.Header>

            <h4>
              <a
                className="App-link"
                href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine"
                target="_blank"
                rel="noopener noreferrer"
                title=" Random Quote Machine"
              >
                <i className="fas fa-quote-left"></i> Random Quotes <i className="fas fa-quote-right"></i>
              </a>
            </h4>

            {/* Random Quote */}

          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p id="text">
                {quote}
              </p>
              <footer className="blockquote-footer" id="author">
                <h3>
                  {author}
                </h3>
                {/* <cite title="Source Title">{source}</cite> */}
              </footer>
              {/* <footer className="blockquote-footer">
                <h3 id="author">
                  {this.state.author}
                </h3>
                <cite title="Source Title">{this.state.source}</cite>
              </footer> */}
            </blockquote>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" id="new-quote" onClick={this.setQuote}>
                <h5>
                  new quote
              </h5>
              </Button>
              <Button as="a" variant="warning" id="tweet-quote" href="twitter.com/intent/tweet" ><i className="fab fa-twitter"></i></Button>
            </ButtonGroup>
          </Card.Body>
        </Card>

        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/videos/836894977"
            target="_blank"
            rel="noopener noreferrer"
            title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </Container>
    );
  }
}

export default Quote;
