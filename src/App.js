import React, { Component } from 'react';
import logo from './circle.png';
import { Row, Col } from 'react-flexbox-grid';
import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import 'react-rangeslider/lib/index.css'
import CustomSlider from './CustomSlider'
class App extends Component {
  state = {
    'age': '',
    'weight': ''
  }

  handleChange = (name, value) => this.setState({[name]: value})

  render() {
    return (
      <div className="App">
          <Row center="xs">
            <Col xs={12}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Calorie Calculator</h1>
        </header>
        <p className="App-intro">
          How many calories should you have daily?
        </p>
        <br></br>
        <h3>What are your goals?</h3>
        <h3>To lose weight?</h3>
        <h3>Maintain weight?</h3>
        <br></br>
        <h3>Use the tool below!</h3>
      </Col>
      </Row>

            <Row center="xs">
              <Col xs={6}>
              <CustomSlider
                label={'How old are you?'}
                min={18}
                max={100}
                getValue={console.log}
              />
              </Col>
            </Row>
            <br></br>
            <Row center="xs">
              <Col xs={6}>
                <CustomSlider
                  label={'How much do you weigh?'}
                  min={100}
                  max={300}
                  getValue={console.log}
                />
              </Col>
            </Row>
            <br></br>
            <Row center="xs">
              <Col xs={6}>
                <CustomSlider
                  label={'How many pounds would you like to lose?'}
                  min={0}
                  max={100}
                  getValue={console.log}
                />
              </Col>
            </Row>
            <br></br>
            <Row center="xs">
              <Col xs={6}>
                What is your activity level?
                <Select
                  name="activityLevel"
                  value={this.state['activityLevel']}
                  onChange={this.handleChange.bind(this, 'activityLevel')}
                  options={[
                    { value: '1.2', label: 'Little to no exercise' },
                    { value: '1.375', label: 'Light exercise 1-3 days/week'},
                    { value: '1.55', label: 'Moderate exercise 6-7 days/week'},
                    {value: '1.725', label: 'Heavy exercise daily, or twice/day' },
                   { value: '1.9', label: 'Heavy exercise more than twice/day, or training for a marathon/triathlon'},
                  ]}
                />

                <button onclick = "findBMR()">
                  Calculate
                </button>

                <h4>What formulas are used?</h4>
              </Col>
            </Row>
      </div>
    );
  }
}

export default App;
