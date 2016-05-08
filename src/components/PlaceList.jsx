import React from 'react'
import mui from 'material-ui'
import Place from './Place.jsx'

var {Card,List}=mui
class PlaceList extends React.Component{
    constructor(props){
        super(props)
        this.state={places: "",key: null}
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
    render(){
        var placeNodes = [];
        for(var i in this.state.places){
            placeNodes.push(<Place key={i} reactKey={i} place={this.state.places[i]} />)
        }
        
        // var placeNodes = this.state.places.map((place)=>{
        //     return (<Place place={place} />)
        // })

        return (<Card style={{
            flexGrow: 1
        }}>
            <List>
                {placeNodes}
            </List> 
        </Card>)    
    }
}

export default PlaceList;