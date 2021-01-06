import React from "react";
import reactCSS from 'reactcss'
import { CirclePicker } from 'react-color';

class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
        color: this.props.initColor,
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {

        this.setState({ color: color.hex })
        this.setState({ displayColorPicker: false })
        // Returning object target with name/value for onChance in create.js / to read event.target
        this.props.onChange({ target: { name: 'colorVal', value: color.hex } })
    };

    render() {
        const styles = reactCSS({
            'default': {
                color: {
                    width: '42px',
                    height: '18px',
                    borderRadius: '2px',
                    background: `${this.state.color}`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <div className="mb-2">
                    Pick a Color:
                </div>
                <div style={styles.swatch} onClick={this.handleClick}>

                    <div style={styles.color} />

                </div>

                { this.state.displayColorPicker
                    ?
                    <div style={styles.popover}>
                        <div style={styles.cover} onClick={this.handleClose} />

                        <CirclePicker
                            color={this.state.color}
                            onChange={this.handleChange}
                        />

                    </div>

                    : null
                }
            </div>
        )
    }
}

export default ColorPicker