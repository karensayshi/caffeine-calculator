import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import MoreInfo from 'react-icons/lib/md/info-outline'
import { ButtonToolbar,OverlayTrigger, Tooltip } from 'react-bootstrap'



export default class CustomSlider extends Component {
    state = {
        value: 0
    }

    getValue = () => {
        this.props.getValue(this.props.name, this.state.value);
    }

    handleChange = value => {
        this.setState({ value }, this.getValue);
    }
    tooltip = () => {
      return (
      <Tooltip id="tooltip">
        {this.props.toolTipMessage}
      </Tooltip>
    )}
    render () {
        const { label, min, max, unit = '', toolTipMessage = false} = this.props;
        const { value } = this.state;
        return (
            <div>
                {label} {toolTipMessage &&
                  <ButtonToolbar>
                    <OverlayTrigger placement="right" overlay={this.tooltip()}>
                      <MoreInfo style={{color:'377BB5'}}></MoreInfo>
                    </OverlayTrigger>
                  </ButtonToolbar>
                }
                <Slider 
                    min={min}
                    max={max}
                    step={1}
                    value={value}
                    onChange={this.handleChange}
                />
                {value + " " + unit}
            </div>
        );
    }
}
