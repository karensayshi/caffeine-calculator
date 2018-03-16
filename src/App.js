import React, { Component } from 'react';
import logo from './circle.png';
import { Row, Col } from 'react-flexbox-grid';
import Jumbotron from './Jumbotron'
import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-rangeslider/lib/index.css';
import CustomSlider from './CustomSlider';
import findBMR from './findBMR';
class App extends Component {
  state = {
      age: '',
      weight: '',
      height: '',
      sex: 'male',
      pounds: '',
      activityLevel: '',
      calculation: 0
  }

  handleChange = (name, value) => this.setState({ [name]: typeof value === 'object' ? value.value : value }, () => console.log(this.state))

  handleFindBMR = () => {
      const { weight, height, age, sex, activityLevel } = this.state;
      if (weight && height && age && sex && activityLevel) {
          this.setState({ calculation: findBMR(weight, height, age, sex, activityLevel) });
      }
  }

  render () {
      return (
          <div className="App">
              <Row center="xs">
                  <Col xs={12}>
                      <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />

                          <h1 className="App-title">Calories Calculator</h1>
                      </header>
                      <br/>
                      <p className="App-intro">
          How many calories should you have daily?
                      </p>
                      <br />
                      <br />
                      <h3>There is no one <span class='prettify'>magic number</span> for the amount of calories everyone needs each day.</h3>
                      <br />
                      <br />
                      <h3>This calculator is a tool, tailored to you, to find <span class='prettify'>your</span> unique number.</h3>
                      <h3></h3>
                 {/* <h3>Find out how many calories you need to maintain your current weight, and use for your favorite calorie tracking apps.</h3> */}
                      <br />
                      <br />
                      <br />

                  </Col>
              </Row>

              <Row center="xs">
                  <Col xs={6}>
                      <CustomSlider
                          name={'age'}
                          label={'How old are you?'}
                          toolTipMessage={'Must be over 18'}
                          min={18}
                          max={100}
                          getValue={this.handleChange}
                      />
                      <br />
                  </Col>
              </Row>
              <br />
              <br />
              <Row center="xs">
                  <Col xs={6}>
                      <CustomSlider
                          name="weight"
                          label={'How much do you weigh?'}
                          toolTipMessage={'Must be over 100 lbs'}
                          min={100}
                          max={300}
                          getValue={this.handleChange}
                          unit={"pounds"}
                      />
                      <br />
                  </Col>
              </Row>
              <br />
              <br />
              <Row center="xs">
                  <Col xs={6}>
                      <CustomSlider
                          name="height"
                          label={'How tall are you?'}
                          min={40}
                          max={100}
                          getValue={this.handleChange}
                          unit={"inches"}
                      />
                      <br />
                  </Col>
              </Row>
              <br />
              {/* <Row center="xs">
                  <Col xs={6}>
                      <CustomSlider
                          label={'How many pounds would you like to lose?'}
                          name="pounds"
                          min={0}
                          max={100}
                          getValue={this.handleChange}
                          unit={"pounds"}
                      />
                      <br />
                  </Col>
              </Row> */}
              <br />
              <Row center="xs">
                  <Col xs={6}>
                What is your activity level?
                      <Select
                          name="activityLevel"
                          value={this.state['activityLevel']}
                          onChange={this.handleChange.bind(this, 'activityLevel')}
                          options={[
                              { value: 1.2, label: 'Little to no exercise' },
                              { value: 1.375, label: 'Light exercise 1-3 days/week' },
                              { value: 1.55, label: 'Moderate exercise 6-7 days/week' },
                              { value: 1.725, label: 'Heavy exercise daily, or twice/day' },
                              { value: 1.9, label: 'Heavy exercise more than twice/day, or training for a marathon/triathlon' }
                          ]}
                      />
                      <br/>
                      <br/>
                      <br />

                      <button
                          className="btn btn-primary btn-lg"
                          onClick={this.handleFindBMR}>
                          Calculate
                      </button>

                      {this.state.calculation > 0 && <div className="calculation-box">
                          <br />
                          <Jumbotron
                            calculation={this.state.calculation}
                          />
                      </div>}
                  </Col>
              </Row>
          </div>
      );
  }
}

export default App;
