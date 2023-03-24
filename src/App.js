import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button/index";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
  }

  handleAdd() {
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  handleSubtract() {
    this.setState((state) => ({ counter: state.counter - 1 }));
  }

  handlerReset() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div className="container">
        <Header />

        <main>
          <div className="display">
            <span>{this.state.counter}</span>
          </div>

          <div className="buttons-container">
            <Button
              label="-1"
              changeCounter={this.handleSubtract}
              color="red"
            />
            <Button label="Zerar" changeCounter={this.handlerReset} />
            <Button label="+1" changeCounter={this.handleAdd} color="green" />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
