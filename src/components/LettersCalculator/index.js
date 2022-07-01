import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputValue: '',
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className="bgContainer">
        <h1>Calculate the Letters you enter</h1>
        <div>
          <label htmlFor="bg">Enter the phrase </label>
          <input
            id="bg"
            type="search"
            placeholder="Enter the phrase"
            value={inputValue}
            onChange={this.onChangeInput}
          />
          <p>No.of letters: {inputValue.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
