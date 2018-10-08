import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'



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
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {this.props.flats.map(flat =>
          {return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} />
        })}
      </GoogleMapReact>
  )};
}

export default SimpleMap;
