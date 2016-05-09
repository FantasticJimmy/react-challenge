import React from 'react'
import mui from 'material-ui'
import ItemDetail from './ItemDetail.jsx'
var {ListItem} = mui;

class Place extends React.Component{
    constructor(props){
        super(props);
        this.state={ shown: 0}
    }
    onTogglePix(){
        this.setState({shown: this.state.shown==0 ? 1 : 0})
    }
    render(){
        var that = this;
        return( <div>
                    <ListItem onClick={this.onTogglePix.bind(this)} >
                        {this.props.place.title}
                    </ListItem>
                    <ItemDetail reactKey={this.props.reactKey} place={this.props.place} param={this.state.shown} namee={this.props.namee}/>
                </div>)
    }
}

export default Place;