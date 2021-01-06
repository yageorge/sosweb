import React from "react";
import reactCSS from 'reactcss'
import { CirclePicker } from 'react-color';

class ColorPreview extends React.Component {
  state = {
    color: this.props.initColor,
  };



  render() {
    const styles = reactCSS({
      'default': {
        color: {
          margin: '18px',
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${this.state.color}`,
        },
      },
    });

    return (

      <div style={styles.color} />


    )
  }
}

export default ColorPreview