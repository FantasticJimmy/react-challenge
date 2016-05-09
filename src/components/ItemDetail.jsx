import React from 'react';
import mui from 'material-ui';
var {FlatButton,Card,CardMedia,CardTitle} = mui;

const styles={
    cardShown:{
        display: 'none',
    },
    cardNotShown: {
        display: 'block',
    }

}
class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        var that = this;
    }
    turnFavorite(event){
        var firebaseRef = new Firebase('https://synaptop-challenge.firebaseio.com/places/'+this.props.reactKey)
        firebaseRef.update({likedBy:"Jimmy"},(err)=>{})
    }
    turnOffFavorite(event){
       var firebaseRef = new Firebase('https://synaptop-challenge.firebaseio.com/places/'+this.props.reactKey)
        firebaseRef.update({likedBy:""},(err)=>{}) 
    }
    render() {

        var imgUrl = this.props.place.imgUrl
        if(this.props.namee!=="fav"){
        return (
                  <Card style={this.props.param==0 ? styles.cardShown : styles.cardNotShown}>
                    <CardMedia
                        overlay={<CardTitle 
                        title={<a href={this.props.place.url} >
                        <h4 style={{color:'white'}}>{this.props.place.title}</h4></a>}
                        subtitle={<FlatButton label="Favorite" primary={true} onClick={this.turnFavorite.bind(this)} />}
                        >
                        </CardTitle>}
                    >
                          <img src={imgUrl} />
                    </CardMedia>
                  </Card>
            )}
        else{
        return (
                  <Card style={this.props.param==0 ? styles.cardShown : styles.cardNotShown}>
                    <CardMedia
                        overlay={<CardTitle 
                        title={<a href={this.props.place.url} >
                        <h4 style={{color:'white'}}>{this.props.place.title}</h4></a>}
                        subtitle={<FlatButton label="Not Fun Anymore" primary={true} onClick={this.turnOffFavorite.bind(this)} />}
                        >
                        </CardTitle>}
                    >
                          <img src={imgUrl} />
                    </CardMedia>
                  </Card>
            )}
    }
}

export default ItemDetail;
