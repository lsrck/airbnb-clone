import React from 'react';
import './marker.scss';

class Marker extends React.Component {
  render() {
    return (
      <div className="marker">
        {this.props.text}
      </div>
    );
  }
}

export default Marker;