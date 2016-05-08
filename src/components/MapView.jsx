import React,{PropTypes, Component}  from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function';

import mui from 'material-ui'
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace.jsx'

class MapView extends Component{
  static propTypes = {
    center: PropTypes.object,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };
  static defaultProps = {
    center: {lat: 43.6532, lng: -79.3832},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
      this.state={places: ""}
        this.firebaseRef = new Firebase('https://synaptop-challenge.firebaseio.com/places/')
        this.firebaseRef.on("value",(places)=>{
            // var that = this;
            // if(this.state.places[place.key()]){
            //      return
            //  }
            // let placeVal = place.val();
            // placeVal.key = place.key();
            // this.state.places[placeVal.key] = placeVal;

            this.setState({places: places.val()});
        });
  }

  render() {
    
    const API_KEY = 'AIzaSyBmNPUIUmIG9qwF6vcfj2fdgQz_XNlHTeA'
    // var placeMapNode = this.state.places.map((place)=>
      // <MyGreatPlace lat={place.lat} lng={place.lng} text={place.title} />)
        var localPlaceMapNodes = [];
        for(var i in this.state.places){
            localPlaceMapNodes.push(<MyGreatPlace key={i} lat={this.state.places[i].lat} lng={this.state.places[i].lng} text={this.state.places[i].title} />)
        }


    return (
       <GoogleMap
       bootstrapURLKeys={{
       key: API_KEY,
       language: 'ru',
       }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        {localPlaceMapNodes}
      </GoogleMap>
    );
  }
}

export default MapView;