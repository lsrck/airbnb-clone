import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.85341,
      lng: 2.3488
    },
    zoom: 11
  };
  
  render() {
    return (
      <GoogleMapReact
        //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      </GoogleMapReact>
  )}
}



export default SimpleMap;