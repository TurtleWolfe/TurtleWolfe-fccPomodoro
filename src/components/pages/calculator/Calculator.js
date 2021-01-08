import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Calculator.css';
import { evaluate } from 'mathjs';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      // equation: 0,
      // operators: ['+', '-', 'x', '÷'],
      operatorFlag: false,
      decimalFlag: false,
      displayNumber: 0,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.handleClear = this.handleClear.bind(this);

  }

  static propTypes = {
    operators: PropTypes.array.isRequired,
    decimalAdded: PropTypes.bool.isRequired,
  };

  handleClick = (buttonName) => {
    let { displayNumber, operatorFlag, decimalFlag } = this.state;
    // let lastChar = displayNumber[displayNumber.length - 1];
    let scndLastChar = displayNumber[displayNumber.length - 2];
    switch (true) {
      // 24:00
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        if (displayNumber !== "0") {
          displayNumber += buttonName;
          operatorFlag = false;
        } else {
          displayNumber = buttonName;
        }
        break;
      case buttonName === "-":
        if (!operatorFlag) {
          displayNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        } else {
          // const newNumber = displayNumber.slice(0, displayNumber.length - 1);
          // displayNumber = newNumber;
          displayNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        }
        break;
      //25:00
      case buttonName === "+" ||
        // buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
        if (scndLastChar === "*") {
          let newNumber = displayNumber.slice(0, displayNumber.length - 1);
          // console.log(newNumber);
          displayNumber = newNumber;
        }
        if (!operatorFlag) {
          displayNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        } else {
          let newNumber = displayNumber.slice(0, displayNumber.length - 1);
          displayNumber = newNumber;
          displayNumber += buttonName;
        }
        break;
      //33:00 clear
      case buttonName === "C":
        displayNumber = "0";
        operatorFlag = false;
        this.setState({ decimalFlag: false });
        break;
      //35:00
      case buttonName === "=":
        displayNumber = evaluate(displayNumber);
        operatorFlag = false;
        this.setState({ decimalFlag: true });
        break;
      //38:00
      case buttonName === ".":
        if (!decimalFlag) {
          displayNumber += ".";
          this.setState({ decimalFlag: true });
        }
        break;
      default:
    }
    this.setState({ operatorFlag });
    this.setState({ displayNumber });
  };

  render() {
    return (
      <Container
        id="calculator">
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
            target="_blank"
            rel="noopener noreferrer"
            title="JavaScript Calculator"
          >
            <i className="fas fa-calculator"></i> Calculator <i className="fas fa-calculator"></i>
          </a>
        </h4>
        {/* <br></br> */}
        <Row className="justify-content-center">
          {/* 789 */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="divide"
            value="/"
            onClick={() => this.handleClick("/")}
          >
            <h2>
              <i class="fas fa-divide"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="seven"
            value="7"
            onClick={() => this.handleClick("7")}
          >
            <h2>
              7
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="eight"
            value="8"
            onClick={() => this.handleClick("8")}
          >
            <h2>
              8
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="nine"
            value="9"
            onClick={() => this.handleClick("9")}
          >
            <h2>
              9
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* 456 */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="multiply"
            value="*"
            onClick={() => this.handleClick("*")}
          >
            <h2>
              <i class="fas fa-times"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="four"
            value="4"
            onClick={() => this.handleClick("4")}
          >
            <h2>
              4
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="five"
            value="5"
            onClick={() => this.handleClick("5")}
          >
            <h2>
              5
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="six"
            value="6"
            onClick={() => this.handleClick("6")}
          >
            <h2>
              6
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* 123 */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="subtract"
            value="-"
            onClick={() => this.handleClick("-")}
          >
            <h2>
              <i class="fas fa-minus"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="one"
            value="1"
            onClick={() => this.handleClick("1")}
          >
            <h2>
              1
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="two"
            value="2"
            onClick={() => this.handleClick("2")}
          >
            <h2>
              2
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="three"
            value="3"
            onClick={() => this.handleClick("3")}
          >
            <h2>
              3
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* +.0 = */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="add"
            value="+"
            onClick={() => this.handleClick("+")}
          >
            <h2>
              <i class="fas fa-plus"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="dark"
            id="decimal"
            value="."
            onClick={() => this.handleClick(".")}
          >
            <h1 className="decim">
              .
            </h1>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="zero"
            value="0"
            onClick={() => this.handleClick("0")}
          >
            <h2>
              0
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="equals"
            value="="
            onClick={() => this.handleClick("=")}
          >
            <h2>
              <strong>
                =
              </strong>
              {/* <i class="fas fa-equals"></i> */}
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* equation, display & clear */}
          <Col as={"h3"}
            className="key-pad" xs={4} sm={2} md={2} lg={2}
            id="equation">
            {this.state.equation}
          </Col>
          <Col as={"h3"}
            className="key-pad" xs={4} sm={2} md={2} lg={2}
            id="display">
            {this.state.displayNumber}
          </Col>
          <Col as={Button}
            className="key-pad" xs={4} sm={3} md={2} lg={2}
            variant="info"
            id="clear"
            value="c"
            onClick={() => this.handleClick("C")}
          >
            <h2>
              clear
            </h2>
          </Col>
        </Row>
        <br></br>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/collections/1DAbboLDVBZxxA"
            target="_blank"
            rel="noopener noreferrer"
            title="These Episodes on Twitch I work on the JavaScript Calculator for my freeCodeCamp certificate using React-BootStrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </Container>
    );
  }
}
export default Calculator;
