class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: "0",
      operatorFlag: false,
      decimalFlag: false
    };
  }

  handleClick = (buttonName) => {
    // const { quote, author } = this.state;
    let currentNumber = this.state.currentNumber;
    let operatorFlag = this.state.operatorFlag;
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
        if (this.state.currentNumber !== "0") {
          currentNumber += buttonName;
          operatorFlag = false;
        } else {
          currentNumber = buttonName;
        }
        break;
      //25:00
      case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
        if (!this.state.operatorFlag) {
          currentNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length - 1);
          currentNumber = newNumber;
          currentNumber += buttonName;
        }
        break;
      //33:00 clear
      case buttonName === "C":
        currentNumber = "0";
        operatorFlag = false;
        this.setState({ decimalFlag: false });
        break;
      //35:00
      case buttonName === "=":
        currentNumber = eval(currentNumber);
        operatorFlag = false;
        this.setState({ decimalFlag: true });
        break;
      //38:00
      case buttonName === ".":
        if (!this.state.decimalFlag) {
          currentNumber += ".";
          this.setState({ decimalFlag: true });
        }
    }
    this.setState({ operatorFlag });
    this.setState({ currentNumber });
  };

  render() {
    return (
      <div>
        <div id="calcGrid">
          <Screen id="display" currentNumber={this.state.currentNumber} />
          <Button id="zero" name="0" handleClick={this.handleClick} />
          <Button id="one" name="1" handleClick={this.handleClick} />
          <Button id="two" name="2" handleClick={this.handleClick} />
          <Button id="three" name="3" handleClick={this.handleClick} />
          <Button id="four" name="4" handleClick={this.handleClick} />
          <Button id="five" name="5" handleClick={this.handleClick} />
          <Button id="six" name="6" handleClick={this.handleClick} />
          <Button id="seven" name="7" handleClick={this.handleClick} />
          <Button id="eight" name="8" handleClick={this.handleClick} />
          <Button id="nine" name="9" handleClick={this.handleClick} />
          <Button id="clear" name="C" handleClick={this.handleClick} />
          <Button id="equals" name="=" handleClick={this.handleClick} />
          <Button id="decimal" name="." handleClick={this.handleClick} />
          <Button id="add" name="+" handleClick={this.handleClick} />
          <Button id="subtract" name="-" handleClick={this.handleClick} />
          <Button id="multiply" name="*" handleClick={this.handleClick} />
          <Button id="divide" name="/" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        {this.props.currentNumber}
      </div>
    );
  }
}

class Button extends React.Component {
  runParentHandleClick = () => {
    this.props.handleClick(this.props.name);
  };
  render() {
    return (
      <button id={this.props.id} onClick={this.runParentHandleClick} className="button">{this.props.name}</button>
    );
  }
}

React.render(<Application />, document.getElementById('app'));