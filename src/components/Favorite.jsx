import React from 'react'
import mui from 'material-ui'
import Place from './Place.jsx'

var {Card,List,CardHeader}=mui
class Favorite extends React.Component{
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
            if(this.state.places[i].likedBy === "Jimmy")
                placeNodes.push(<Place key={i} reactKey={i} place={this.state.places[i]} />)
        }
        
        // var placeNodes = this.state.places.map((place)=>{
        //     return (<Place place={place} />)
        // })

        return (<Card style={{
            width: '30%',
            color: 'blue',
            marginLeft: '30%'
        }}
        >
            <CardHeader
            title="Favorite"
            avatar="https://en.gravatar.com/userimage/98668713/d9d9769e911cba8b7ade2a94529281e6.jpg" />
            <List>
                {placeNodes}
            </List> 
        </Card>)    
    }
}

export default Favorite;