import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'



class SimpleMap extends Component {

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }
    let zoom = 11

    if (this.props.selectedFlat) {
      console.log(this.props.selectedFlat)
      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      };
      zoom = 13;
    }

    return (
      <GoogleMapReact
        center={center}
        zoom={zoom}
      >
        {this.props.flats.map(flat =>
          {return <Marker 
            key={flat.name} 
            lat={flat.lat} 
            lng={flat.lng} 
            text={flat.price} 
            selected={flat === this.props.selectedFlat} />
        })}
      </GoogleMapReact>
  )};
}

export default SimpleMap;
