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
    render() {
        // var that = this;
        // debugger
        var imgUrl = this.props.place.imgUrl
        return (
                  <Card style={this.props.param==0 ? styles.cardShown : styles.cardNotShown}>
                    <CardMedia
                        overlay={<CardTitle 
                        title={<a href={this.props.place.url} >
                        <h4 style={{color:'white'}}>{this.props.place.title}</h4></a>}

                        subtitle={ if(false) {
                            <FlatButton label="Favorite" primary={true} onClick={this.turnFavorite.bind(this,this.props.key)} />}
                            else{
                                "asd"
                            }
                        }
                        >
                        </CardTitle>}
                    >
                          <img src={imgUrl} />
                    </CardMedia>
                  </Card>
            )
    }
}

export default ItemDetail;
