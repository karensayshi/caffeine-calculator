import React, { Component } from 'react';
import Slider from 'react-rangeslider';

export default class CustomSlider extends Component {
    state = {
        value: 0
    }

    getValue = () => {
        this.props.getValue(this.props.name, this.state.value);
    }

    handleChange = value => {
        this.setState({ value }, this.getValue());
    }

    render () {
        const { label, min, max, unit = '' } = this.props;
        const { value } = this.state;
        return (
            <div>
                {label}
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
